import React from 'react';
import TodoListItem from '../todo-list-item';
import { Todo } from '../../../store/modules/todos';

interface TodoListProps {
  todoList: Array<Todo>
}

const TodoList: React.FC<TodoListProps> = ({ todoList }) => (
  <ul>
    { todoList[0]
      ? todoList.map((todo) => <TodoListItem key={todo.id} todo={todo} />)
      : <div>등록된 할 일이 없습니다.</div>}
  </ul>
);

export default TodoList;
