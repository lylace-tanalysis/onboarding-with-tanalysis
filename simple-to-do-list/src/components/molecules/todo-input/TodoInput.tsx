import React, { useState, useCallback } from 'react';
import { useAppDispatch } from '../../../hooks';
import { addTodo } from '../../../store/modules/todos';
import TodoInputView from './TodoInputView';

const TodoInput: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const onClick = useCallback(() => {
    dispatch(addTodo(value));
    setValue('');
  }, [dispatch, value])

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onClick();
    }
  }, [onClick])

  const inputProps = {
    value,
    onChange,
    onKeyDown
  };

  const buttonProps = {
    onClick
  };

  const props = {
    inputProps,
    buttonProps,
  };

  return <TodoInputView {...props} />;
};

export default TodoInput;
