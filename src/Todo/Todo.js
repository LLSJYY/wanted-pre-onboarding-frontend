import NewTodo from "./NewTodo";
import { useEffect, useState } from "react";
import { api } from "../API/API";
import './Todo.css'
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
const Todo = () => {
  const accessToken = localStorage.getItem('wtd_tk');
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    api.initTodo(accessToken).then((res) => {
      setTodoList([
        ...res.data,
      ])
    })

  }, [newTodo])

  const onAddTodo = (data) => {
    api.addTodo(accessToken, data).then((res) => {
      const { todo, userId, id, isCompleted } = res.data;
      setTodoList([
        ...todoList,
        {
          todo,
          userId,
          id,
          isCompleted,
        },
      ])
    })
  }

  const onDeleteTodo = () => {
    
  }

  return (
    <div id="todo-container">
      <NewTodo
        setNewTodo={setNewTodo}
        onAddTodo={onAddTodo}
      />
      <TodoList>
        <TodoItem
          todoList={todoList}
          setNewTodo={setNewTodo} />
      </TodoList>
    </div>
  )
}

export default Todo;