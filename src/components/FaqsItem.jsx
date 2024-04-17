import React from "react";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b w-3/4 mx-auto relative border-gray-600 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-[#ECD200] font-medium">{question}</h3>
        <div className="text-white">
          {isOpen ? <i class="fas fa-minus"></i> : <i class="fas fa-plus"></i>}
        </div>
      </div>
      {isOpen && <div className="text-white text-xs mt-2">{answer}</div>}
    </div>
  );
};
export default FAQItem;
