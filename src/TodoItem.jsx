import React from 'react';

const TodoItem = (props) => {

  return (
    <>
    <div className='addedItem'>
      <li>{props.listAdd}</li>
      <i className="fas fa-trash-can" onClick={()=>{
        props.deletinitems(props.id)}}></i>
      </div>
    </>
  )
}

export default TodoItem
