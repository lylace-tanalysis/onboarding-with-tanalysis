import React from 'react';
import Button, { ButtonProps } from '../../atoms/button/Button';
import { Todo } from '../../../store/modules/todos';

export interface TodoListItemViewProps {
	descriptionClassName?: string;
	todo: Todo;
	onClick?: React.MouseEventHandler<HTMLDivElement>
	deleteButtonProps: ButtonProps;
	doneButtonProps: ButtonProps;
}

const TodoListItemView: React.FC<TodoListItemViewProps> = ({
  descriptionClassName = '',
  todo,
  onClick,
  deleteButtonProps,
  doneButtonProps,
}) => (
  <li
    className="flex justify-between gap-5 border-b border-indigo-500 mb-3"
		>
    <div className={descriptionClassName} onClick={onClick}>
      {todo.description}
    </div>
    {
			 todo.done
			 ? <Button {...deleteButtonProps} />
			 : <Button {...doneButtonProps} />
		 }
  </li>
);

export default TodoListItemView;
