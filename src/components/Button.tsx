import React from 'react';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="px-4 py-2 rounded text-white bg-blue-500 shadow"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
