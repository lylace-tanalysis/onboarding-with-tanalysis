import React from 'react';
import { useAppSelector } from './hooks';
import TodoInput from './components/molecules/todo-input';
import TodoList from './components/molecules/todo-list';
import './App.css';

const App: React.FC = () => {
  const todos = useAppSelector((state) => state.todos);

  return (
    <div className="App p-20 flex justify-center flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold underline">
        Todo 리스트!
      </h1>
      <div className="p-5 w-full max-w-2xl">
        <TodoInput></TodoInput>
        <TodoList todoList={todos}></TodoList>
      </div>
    </div>
  );
};

export default App;
