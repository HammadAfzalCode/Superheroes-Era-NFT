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
        <h3 className="text-yellow-500 font-medium">{question}</h3>
        <div className="text-white">
          {isOpen ? <i class="fas fa-minus"></i> : <i class="fas fa-plus"></i>}
        </div>
      </div>
      {isOpen && <div className="text-white mt-2">{answer}</div>}
    </div>
  );
};

const FAQsComponent = () => {
  const faqs = [
    {
      id: 1,
      question: "Understanding NFTs Digital Collectibles",
      answer:
        "NFTs or Non-fungible tokens are unique digital assets stored on the blockchain. Fungibility is a property that denotes interchangeability. An ETH is fungible- one ETH can be swapped for another ETH. Owners of ETH do not particularly care which ETH they own. Whereas in the case of NFTs, this does not hold true.",
    },
    { id: 2, question: "Why do People Want to Own NFTs?" },
    { id: 3, question: "Factors Influencing NFT Value" },
    { id: 4, question: "Growth within the NFT Space" },
    { id: 5, question: "Purchasing NFTs & NFT Marketplaces" },
    // ... other questions
  ];

  return (
    <div
      className="p-6"
      style={{ background: "linear-gradient(0deg, #0E0020 0%, #000000 100%)" }}
    >
      <h2 className="text-yellow-400 font-bold text-2xl mb-6">FAQ's</h2>
      {faqs.map((faq) => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
      <button className=" mt-6 relative left-[40%]  sm:w-[15%]  bg-[#060C03] xs:text-sm   text-white py-2 px-4 border-t border-l border-[#ECD200] border-b-4 border-r-4 rounded-sm opacity-100 hover:bg-black">
        View More
      </button>
    </div>
  );
};

export default FAQsComponent;
