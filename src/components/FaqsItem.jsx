const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-600 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-white font-medium">{question}</h3>
        <div className="text-white">{isOpen ? "⊖" : "⊕"}</div>
      </div>
      {isOpen && <div className="text-white mt-2">{answer}</div>}
    </div>
  );
};
