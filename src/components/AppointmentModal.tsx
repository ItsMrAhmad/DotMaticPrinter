"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Calendar, Clock, MapPin, Phone, MessageCircle, ArrowRight, Check } from "lucide-react";
import { BUSINESS_INFO } from "@/data/products";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("Corporate Printing & Merchandise");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Afternoon (2:00 PM - 5:00 PM)");
  const [notes, setNotes] = useState("");

  const projectOptions = [
    "Corporate Printing & Merchandise",
    "Custom Packaging & Boxes",
    "Wedding Stationery & Cards",
    "Stickers, Labels & Paper Bags",
    "Bulk Commercial Inquiries",
  ];

  const handleConfirmAppointment = () => {
    const text = encodeURIComponent(
      `Hello Dot Matic Printer!\n\n` +
      `I would like to book an in-person appointment at your Gulberg workshop:\n` +
      (name ? `• Name: ${name}\n` : "") +
      `• Project Type: ${projectType}\n` +
      (preferredDate ? `• Preferred Date: ${preferredDate}\n` : "") +
      `• Preferred Time: ${preferredTime}\n` +
      (notes ? `• Project Details: ${notes}\n` : "") +
      `\nPlease confirm the booking schedule. Thank you!`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#2D3092] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-none">
                Book a Workshop Appointment
              </h2>
              <span className="text-[11px] font-bold text-[#F88521] uppercase tracking-wider">
                Al Latif Center, Main Blvd, Gulberg, Lahore
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-red-100 hover:text-red-600 text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-90"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700">
          <p className="text-slate-600 text-sm leading-relaxed">
            Visit our workshop in Gulberg, Lahore to inspect paper textures, box die-lines, foil stamping samples, and discuss bulk order pricing directly with our production experts.
          </p>

          {/* Name Input */}
          <div>
            <label className="font-bold uppercase tracking-wider text-slate-900 block mb-1">
              Your Name / Company Name:
            </label>
            <input
              type="text"
              placeholder="e.g. Ahmad Khan / Tech Solutions"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#2D3092] text-xs transition-colors"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="font-bold uppercase tracking-wider text-slate-900 block mb-1.5">
              Select What You Need:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {projectOptions.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setProjectType(opt)}
                  className={`text-left p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                    projectType === opt
                      ? "bg-[#2D3092] text-white border-[#2D3092] shadow-xs active:bg-[#F88521]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:bg-blue-50"
                  }`}
                >
                  <span>{opt}</span>
                  {projectType === opt && <Check className="w-3.5 h-3.5 shrink-0 ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="font-bold uppercase tracking-wider text-slate-900 block mb-1">
                Preferred Date:
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#2D3092] text-xs transition-colors cursor-pointer"
              />
            </div>

            <div>
              <label className="font-bold uppercase tracking-wider text-slate-900 block mb-1">
                Preferred Time:
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#2D3092] text-xs transition-colors cursor-pointer"
              >
                <option>Morning (11:00 AM - 2:00 PM)</option>
                <option>Afternoon (2:00 PM - 5:00 PM)</option>
                <option>Evening (5:00 PM - 8:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="font-bold uppercase tracking-wider text-slate-900 block mb-1">
              Estimated Quantities / Notes (Optional):
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Need 500 corrugated boxes with logo + 200 visiting cards"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#2D3092] text-xs transition-colors"
            />
          </div>

          {/* Location Reminder */}
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#F88521] shrink-0 mt-0.5" />
            <div className="text-[11px] text-slate-600">
              <strong className="text-slate-800">Workshop Address:</strong> {BUSINESS_INFO.address}. Open {BUSINESS_INFO.hours}.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#F88521]" />
            <span>Direct Call: {BUSINESS_INFO.whatsappFormatted}</span>
          </a>

          <button
            onClick={handleConfirmAppointment}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#128C7E] text-white py-2.5 px-6 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Confirm via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
