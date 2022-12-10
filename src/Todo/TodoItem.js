import { useRef } from "react"

const TodoItem = ({ todoList, onDestoryTodo, onCompletedTodo }) => {

  return (
    todoList.map((el) => {
      return <li key={el.id} className='todoItem'>
        <input
          id="todoCheckbox"
          type='checkbox'
          defaultChecked={el.isCompleted}
          onChange={() => { onCompletedTodo(el) }}
        />
        <span id="todoText">{el.todo}</span>
        <button onClick={() => onCompletedTodo(el)} className="btn modify">수정</button>
        <button onClick={() => onDestoryTodo(el.id)} className="btn destroy">삭제</button>
      </li>
    })
  )
}

export default TodoItem;