//general inputbox

import React from 'react';

// Props definition for the InputBox component
interface InputBoxProps {
    label?: string; // optional; what the input is for
    id: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle changes
    error?: string;
    required?: boolean; // whether the input is required
    className?: string; // Optional className override
    disabled?: boolean; // Whether the input should be disabled
}

// Reusable and accessible input box component
const InputBox: React.FC<InputBoxProps> = ({
                                               label,
                                               id,
                                               type = 'text',
                                               placeholder = '',
                                               value,
                                               onChange,
                                               error,
                                               required = false,
                                               className = '',
                                               disabled = false,
                                           }) => {
    return (
        <div className={`flex flex-col gap-[6px] mb-4 ${className}`}>
            {/* Render label if provided */}
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-gray-800">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            {/* Main input field */}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                aria-required={required}
                disabled={disabled}
                className={`h-[36px] rounded-[8px] px-3 py-1.5 text-sm border ${
                    error ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />

            {/* Display error message if present */}
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default InputBox;
