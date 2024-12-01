import React, { useState } from 'react';

const Dropdown = ({ sources, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSource, setSelectedSource] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedSource(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        {selectedSource ? selectedSource : 'Select a source'}
      </button>
      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 w-56 origin-bottom-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {sources.map((source) => (
              <button
                key={source.value}
                className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleSelect(source.value)}
              >
                {source.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

