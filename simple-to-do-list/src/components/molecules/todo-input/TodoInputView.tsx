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
    <Input {...inputProps} />
    <Button {...buttonProps} />
  </div>
);

export default TodoInputView;
