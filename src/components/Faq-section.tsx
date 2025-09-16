"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "What is Zuno?",
    answer:
      "Zuno combines AI technology with real psychology-based techniques, offering support that adapts to your mood, routine, and specific challenges like anxiety, sleep, libido, and focus.",
  },
  {
    question: "Is Zuno a replacement for therapy?",
    answer:
      "No. Zuno is a powerful daily tool for emotional well-being, but it’s not a medical service or a substitute for professional therapy. It’s here to support you, not replace clinical care.",
  },
  {
    question: "Who is Zuno for?",
    answer:
      "Zuno is designed for women aged 18–35 who want to better understand their mental and emotional health using modern, tech-savvy tools — no stigma, no pressure.",
  },
  {
    question: "How does the AI actually help?",
    answer:
      "Zuno uses AI to learn your patterns, suggest personalized exercises, monitor your emotional shifts, and guide you through breathing, journaling, focus-building, and self-awareness practices.",
  },
  {
    question: "What kind of issues can Zuno help me with?",
    answer:
      "Zuno helps with everyday mental health challenges like anxiety, sleep issues, low libido, poor focus, emotional eating, and burnout — all in one gentle, beautiful space.",
  },
  {
    question: "Can I use Zuno every day?",
    answer:
      "Absolutely. Zuno was built to support your daily rhythms—from your morning energy to nighttime rest.",
  },
];

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="mx-auto text-center w-full">
        <div className="w-30 mx-auto">
          <h1 className="bg-gray-200 mx-auto py-1 px-4 rounded-full text-sm">
            Questions?
          </h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">
          We&apos;re here to help
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-6 text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900 pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0">
                {openItems.includes(index) ? (
                  <Minus className="w-6 h-6 text-gray-600" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-600" />
                )}
              </div>
            </button>

            {openItems.includes(index) && (
              <div className="pb-6 pr-10">
                <p className="text-gray-600 font-medium">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
