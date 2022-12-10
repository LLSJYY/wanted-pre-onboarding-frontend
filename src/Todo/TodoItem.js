import { useRef } from "react"

const TodoItem = ({ todoList,onDestoryTodo }) => {
  const checkboxRef = useRef();
  const onClickCheckbox = (e) => {
  }
  const onClickModifyBtn = (e) => {
  }
  
  
  return (
    todoList.map((el) => {
      return <li key={el.id} className='todoItem'>
        <input
          id="todoCheckbox"
          type='checkbox'
          ref={checkboxRef}
          onClick={onClickCheckbox}
        />
        <span id="todoText">{el.todo}</span>
        <button onClick={onClickModifyBtn} className="btn modify">수정</button>
        <button onClick={()=>onDestoryTodo(el.id)} className="btn destroy">삭제</button>
      </li>
    })
  )
}

export default TodoItem;