import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { addTodo } from '../../../store/modules/todos';
import TodoInputView from './TodoInputView';

const TodoInput: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(addTodo(value));
    setValue('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  const inputProps = {
    className: 'w-4/5',
    value,
    onChange,
    onKeyDown,
  };

  const buttonProps = {
    className: 'w-1/5',
    onClick,
  };

  const props = {
    inputProps,
    buttonProps,
  };

  return <TodoInputView {...props} />;
};

export default TodoInput;
