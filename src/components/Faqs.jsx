import React from "react";
import { FAQS } from "../utils/constants/faqsConstants";
import FAQItem from "./FaqsItem";

const FAQsComponent = () => {
  return (
    <div
      className="p-6 flex flex-col"
      style={{ background: "linear-gradient(0deg, #0E0020 0%, #000000 100%)" }}
    >
      <h2 className="text-[#ECD200] font-bold text-2xl self-center mb-6">
        FAQ's
      </h2>
      {FAQS.map((faq) => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
      <button className=" mt-6 relative mx-auto   bg-[#060C03] xs:text-sm   text-white py-2 px-4 border-t border-l border-[#ECD200] border-b-4 border-r-4 rounded-sm opacity-100 hover:bg-black">
        View More
      </button>
    </div>
  );
};

export default FAQsComponent;
