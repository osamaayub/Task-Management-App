import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, className }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };
  return (
    <input
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
      className={className || 'input-class'}
    />
  );
};

export default Input;