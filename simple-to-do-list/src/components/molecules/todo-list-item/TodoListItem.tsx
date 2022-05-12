import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { removeTodo, setTodoStatus, Todo } from '../../../store/modules/todos';
import TodoListItemView from './TodoListItemView';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const handleDone = (done: boolean, id: string) => dispatch(setTodoStatus({ done, id }));
  const handleRemove = (id:string) => dispatch(removeTodo(id));

  const deleteButtonProps = {
    title: '삭제',
    onClick: () => handleRemove(todo.id)
  };

  const onClick = () => handleDone(!todo.done, todo.id);

  const doneButtonProps = {
    title: '완료',
    onClick
  };

  const props = {
    todo,
    onClick,
    deleteButtonProps,
    doneButtonProps
  };

  return <TodoListItemView {...props} />;
};

export default TodoListItem;
