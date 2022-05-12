import React from 'react';

export interface InputProps {
	className?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  className = '',
  value = '',
  onChange,
  onKeyDown,
}) => (
  <input
    className={className}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
		/>
);

export default Input;
