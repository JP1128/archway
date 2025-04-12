// This is an input box for search
// - No label by default
// - Always displays a search icon on the left
// - Placeholder text is customizable (default is “Search”)

import React from 'react';
import { Search } from 'lucide-react'; // magnifier icon

interface SearchInputBoxProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}

const SearchInputBox: React.FC<SearchInputBoxProps> = ({
                                                           value,
                                                           onChange,
                                                           placeholder = 'Search',
                                                           className = '',
                                                       }) => {
    return (
        <div className={`relative ${className}`}>
            <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
            />
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full h-[36px] rounded-[8px] pl-10 pr-3 py-1.5 text-sm border focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 bg-[#E6E6E6]"
            />
        </div>
    );
};

export default SearchInputBox;
