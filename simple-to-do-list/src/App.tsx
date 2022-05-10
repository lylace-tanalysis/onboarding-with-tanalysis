import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from "./hooks";
import { addTodo, removeTodo, setTodoStatus } from "./store/modules/todos"
import './App.css';



const App: React.FC = () => {
  const [description, setDescription] = useState("")
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)
  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 13) {
      handleClick()
      e.preventDefault()
    }
  }
  const handleClick = () => {
    setDescription("")
    dispatch(addTodo(description))
  }

  const handleDone = (done: boolean, id: string) => dispatch(setTodoStatus({ done, id }))

  const handleRemove = (id:string) => dispatch(removeTodo(id))


  return (
    <div className="App p-20 flex justify-center flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold underline">
        Todo 리스트!
      </h1>
      <div className="p-5 w-full">
        <div className="flex justify-between">
          <input className="flex-grow w-4/5" value={description} onKeyDown={handleKeyDown} onChange={handleChange}></input>
          <button className="w-1/5" onClick={handleClick}>입력</button>
        </div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} className="flex justify-between gap-5 border-b border-indigo-500">
              <div className={todo.done ? "flex-grow line-through" : "flex-grow"} onClick={() => handleDone(!todo.done, todo.id)}>{todo.description}</div>
              {todo.done ? (
                <div className="min-w-fit" onClick={() => handleRemove(todo.id)}>삭제</div>
              ) : (
                <div className="min-w-fit" onClick={() => handleDone(!todo.done, todo.id)}>완료</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
