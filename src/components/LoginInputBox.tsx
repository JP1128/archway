// This is a  input box for login forms
// - Displays a label (optional, passed via props)
// - Automatically shows a "show/hide password" eye icon when type is "password"

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Eye, EyeOff icon

interface LoginInputBoxProps {
    label: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: 'email' | 'password';
    placeholder?: string;
    error?: string;
    required?: boolean;
    className?: string;
    disabled?: boolean;
}

const LoginInputBox: React.FC<LoginInputBoxProps> = ({
                                                         label,
                                                         id,
                                                         value,
                                                         onChange,
                                                         type,
                                                         placeholder = '',
                                                         error,
                                                         required = false,
                                                         className = '',
                                                         disabled = false,
                                                     }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex flex-col gap-[6px] mb-4">
            {label && (
                <label htmlFor={id} className="text-sm font-medium text-gray-800">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            <div className="relative">
                <input
                    id={id}
                    type={type === 'password' && !showPassword ? 'password' : 'text'}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    aria-required={required}
                    disabled={disabled}
                    className={`h-[36px] rounded-[8px] px-3 py-1.5 text-sm border ${
                        error ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                />
                {type === 'password' && (
                    <div
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </div>
                )}
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default LoginInputBox;
