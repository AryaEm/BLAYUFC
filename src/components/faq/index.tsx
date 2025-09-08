"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const leftFaqs: FAQItem[] = [
  {
    question: "Bagaimana cara saya bergabung dengan Blayu FC?",
    answer: "Calon pemain dapat mendaftar melalui WhatsApp 082142117946",
  },
  {
    question: "Apakah Blayu FC aktif di media sosial?",
    answer: "Ya, Blayu FC aktif di Instagram @akademi_blayu_fc.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    question: "Apakah Blayu FC membuka kesempatan untuk sponsorship?",
    answer: "We support credit/debit cards, PayPal, and more payment methods depending on your region.",
  },
  {
    question: "Bagaimana cara mengikuti berita terbaru tentang Blayu FC?",
    answer: "Anda bisa mengikuti update terbaru melalui website resmi atau media sosial Blayu FC.",
  },
];

function FaqItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border rounded-lg bg-[#f6f6f6]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
      >
        <span className={`${open ? "font-bold text-sm" : "text-sm"}`}>{question}</span>
        <span>{open ? <IoIosArrowUp /> : <IoIosArrowDown/>}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="w-full relative flex flex-col justify-center items-center py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        Frequently Asked <span className="text-red-600"><br />Questions</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="flex flex-col gap-6">
          {leftFaqs.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {rightFaqs.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
