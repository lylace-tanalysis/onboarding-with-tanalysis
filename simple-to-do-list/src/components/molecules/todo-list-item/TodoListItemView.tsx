import React from 'react';
import Button, { ButtonProps } from '../../atoms/button/Button';
import { Todo } from '../../../store/modules/todos';

export interface TodoListItemViewProps {
	todo: Todo;
	onClick?: React.MouseEventHandler<HTMLDivElement>
	deleteButtonProps: ButtonProps;
	doneButtonProps: ButtonProps
}

const TodoListItemView: React.FC<TodoListItemViewProps> = ({
  todo,
  onClick,
  deleteButtonProps,
  doneButtonProps,
}) => (
  <li
    className="flex justify-between gap-5 border-b border-indigo-500 mb-3"
		>
    <div className={todo.done ? "flex-grow line-through" : "flex-grow"} onClick={onClick}>
      {todo.description}
    </div>
    {
			 todo.done
			 ? <Button className="min-w-fit" {...deleteButtonProps} />
			 : <Button className="min-w-fit" {...doneButtonProps} />
		 }
  </li>
);

export default TodoListItemView;
