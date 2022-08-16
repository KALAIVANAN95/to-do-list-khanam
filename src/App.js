import React,{useState} from 'react'
import TodoItem from './TodoItem';

import './App.css';

function App() {

  const [list,setList]=useState("");
  const [item,setItem]=useState([]);

  const addItem = (event) => {
    console.log("event")
    setList(event.target.value);
  }

  const newItem = () =>{
      setItem((itemAdded)=>{
        return[...itemAdded,list];
      })

      setList('');
  }

  
  const deleteList = (id)=>{
setItem((oldvalues)=>{

  return oldvalues.filter((arrElem,index)=>{
    return index!==id;
  })
})
  }
  return (

    <>
    <div className="container">
      <div className="todolist">
        <h1>To-do List</h1>
        <input type="text" placeholder="Enter the new items" onChange={addItem} value={list} />
        <button onClick={newItem}><i className="fas fa-plus"></i></button>
        <ol>
          {/* <li>{list}</li> */}
          {
            item.map((value,index)=> {
              return(
                <>
                
                <TodoItem 
                listAdd={value} 
                id={index}
                deletinitems={deleteList}
                />
               
                
                </>
              )
            })
          }
        </ol>
        {/* <i class="fas fa-trash"></i> */}
        {/* <i class="fas fa-trash-can"></i> */}
      </div>
    </div>
    
    </>
  
    );
}

export default App;
