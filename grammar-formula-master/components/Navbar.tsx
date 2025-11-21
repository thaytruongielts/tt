import React from 'react';
import { EXERCISE_DATA } from '../data';

interface NavbarProps {
  activePartId: number;
  onSelectPart: (id: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePartId, onSelectPart }) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide">
          {EXERCISE_DATA.map((part) => (
            <button
              key={part.id}
              onClick={() => onSelectPart(part.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activePartId === part.id
                  ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {part.title.split(':')[0]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};