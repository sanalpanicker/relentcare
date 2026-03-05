"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

const CONTACT_IMG =
  "https://static.wixstatic.com/media/bbc559_408f2473a6e9478c938a4167cb1f200a~mv2.jpg/v1/fill/w_720,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bbc559_408f2473a6e9478c938a4167cb1f200a~mv2.jpg";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass =
    "bg-transparent border-0 border-b border-[#aaa] px-0.5 py-2 text-sm text-[#2d2d2d] outline-none w-full placeholder-[#888] font-[inherit]";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
      {/* Form Panel */}
      <div className="bg-[#f5f0e1] px-10 md:px-16 py-14 flex flex-col justify-center">
        <h2 className="text-4xl font-normal italic text-[#2d2d2d] mb-7">Get in Touch</h2>

        <p className="text-sm font-semibold text-[#2d2d2d] text-center mb-6 leading-snug">
          <Link href="/" className="hover:text-[#6b7c5e] transition-colors">
            The ENT Clinic Thrissur [RelentCare]
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-0">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </div>

          <input
            type="tel"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={`${inputClass} mb-3`}
          />

          <textarea
            placeholder="Type your message here…"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} resize-none mb-5`}
          />

          <button
            type="submit"
            className="bg-transparent border-0 border-b border-[#aaa] py-2 text-[0.95rem] text-[#2d2d2d] text-center cursor-pointer font-[inherit] hover:text-[#6b7c5e] transition-colors"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-center text-sm text-[#6b7c5e] mt-4">Thanks for submitting!</p>
          )}
        </form>
      </div>

      {/* Image Panel */}
      <div
        className="min-h-[320px] md:min-h-0"
        style={{
          backgroundImage: `url('${CONTACT_IMG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
