import React from 'react';
import Button from '../../atoms/button';
import Input, { InputProps } from '../../atoms/input/Input';
import { ButtonProps } from '../../atoms/button/Button';

interface TodoInputViewProps {
  inputProps: InputProps;
  buttonProps: ButtonProps;
}

const TodoInputView: React.FC<TodoInputViewProps> = ({
  inputProps,
  buttonProps,
}) => (
  <div className="flex justify-between">
    <Input className="w-4/5" {...inputProps} />
    <Button className="w-1/5" {...buttonProps} />
  </div>
);

export default TodoInputView;
