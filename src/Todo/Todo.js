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
  const [modify, setModify] = useState({ id: 0, mode: '',isModified:false });
  
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

  const onDestoryTodo = (id) => {
    api.destoryTodo(accessToken, id).then((res) => {
      const newTodoList = todoList.filter((el) => {
        return el.id !== id
      });
      console.log(newTodoList);
      setTodoList([
        ...newTodoList,
      ])
    })
  }

  const onModifyBtn = (id, mode,modeStatus) => {
    console.log(modeStatus);
    setModify({
      id,
      mode,
      isModified:modeStatus,
    })
  }

  const onCompletedTodo = (item) => {
    const copyTodoList = todoList;
    api.completedTodo(accessToken, item).then((res) => {
      copyTodoList.forEach((el) => {
        if (el.id === item.id) {
          el.isCompleted = !item.isCompleted;
        }
      })
      setTodoList(copyTodoList);
    })
  }

  const onModifyTodo = ({ item, newTodo }) => {
    const deepCopy = (arr) => arr.map((el) => ({ ...el }));
    const copyTodoList = deepCopy(todoList);
    setModify({ mode: 'modify',isModified:false })
    api.modifyTodo(accessToken, { item, newTodo }).then((res) => {
      copyTodoList.forEach((el) => {
        if (el.id === item.id) {
          el.todo = newTodo;
        }
      })
      setTodoList(copyTodoList);
    })
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
          modify={modify}
          onDestoryTodo={onDestoryTodo}
          setNewTodo={setNewTodo}
          onCompletedTodo={onCompletedTodo}
          onModifyBtn={onModifyBtn}
          onModifyTodo={onModifyTodo}
        />

      </TodoList>
    </div>
  )
}

export default Todo;