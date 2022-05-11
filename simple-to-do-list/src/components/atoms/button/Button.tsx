import React from 'react';

export interface ButtonProps {
	title?: string;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  title = '확인',
  className = '',
  onClick,
}) => (
  <button
    className={className}
    onClick={onClick}
		>
    {title}
  </button>
);

export default Button;
