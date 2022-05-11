import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { removeTodo, setTodoStatus, Todo } from '../../../store/modules/todos';
import TodoListItemView from './TodoListItemView';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const descriptionClassName = todo.done ? 'flex-grow line-through' : 'flex-grow';

  const handleDone = (done: boolean, id: string) => dispatch(setTodoStatus({ done, id }));
  const handleRemove = (id:string) => dispatch(removeTodo(id));

  const deleteButtonProps = {
    title: '삭제',
    className: 'min-w-fit',
    onClick: () => handleRemove(todo.id),
  };

  const onClick = () => handleDone(!todo.done, todo.id);

  const doneButtonProps = {
    title: '완료',
    className: 'min-w-fit',
    onClick,
  };

  const props = {
    descriptionClassName,
    todo,
    onClick,
    deleteButtonProps,
    doneButtonProps,
  };

  return <TodoListItemView {...props} />;
};

export default TodoListItem;
