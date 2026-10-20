import { readFile } from "node:fs/promises";

const pkg = JSON.parse(await readFile("package.json", "utf8"));
const lockText = await readFile("package-lock.json", "utf8");
const lock = JSON.parse(lockText);

const problems = [];

// 1. Every dependency declared in package.json must appear in the lockfile.
const declared = {
  ...pkg.dependencies,
  ...pkg.devDependencies,
  ...pkg.optionalDependencies,
};
for (const name of Object.keys(declared)) {
  if (!lockText.includes(`"node_modules/${name}"`)) {
    problems.push(`${name} is in package.json but has no lockfile entry`);
  }
}

// 2. Packages known to ship per-platform binaries. If one is present, the
//    lockfile must carry the Linux variants too, or the build machine breaks.
const NATIVE = {
  sharp: ["@img/sharp-linux-x64", "@emnapi/runtime"],
  "@swc/core": ["@swc/core-linux-x64-gnu"],
  esbuild: ["@esbuild/linux-x64"],
  "@parcel/watcher": ["@parcel/watcher-linux-x64-glibc"],
  tailwindcss: ["@tailwindcss/oxide-linux-x64-gnu"],
};
for (const [name, required] of Object.entries(NATIVE)) {
  if (!lockText.includes(`"node_modules/${name}"`)) continue;
  for (const dep of required) {
    if (!lockText.includes(dep)) {
      problems.push(
        `${name} is installed but ${dep} is missing from the lockfile - npm ci will fail on Linux`
      );
    }
  }
}

// 3. The lockfile's root record must carry the same version ranges as
//    package.json.
const root = lock.packages?.[""] ?? {};
const rootRanges = { ...root.dependencies, ...root.devDependencies, ...root.optionalDependencies };
for (const [name, range] of Object.entries(declared)) {
  if (rootRanges[name] !== undefined && rootRanges[name] !== range) {
    problems.push(`${name}: package.json asks for "${range}" but the lockfile records "${rootRanges[name]}" - run npm install`);
  } else if (rootRanges[name] === undefined && lock.lockfileVersion >= 2) {
    problems.push(`${name} is missing from the lockfile's root record - run npm install`);
  }
}

console.log(`checked ${Object.keys(declared).length} declared dependencies (lockfileVersion ${lock.lockfileVersion})`);
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log("  lockfile covers every declared dependency, no platform gaps");
