const TodoItem = ({ item }) => {

  return (
    item.map((el)=>{
      <li><input type='checkbox'/>{el.data}</li>
    })
  )
}