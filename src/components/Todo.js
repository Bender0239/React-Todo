import React from 'react'

const Todo = props => {
    const {toggleItem, item } = props
    console.log(item)
    return(
        <div 
            onClick={() => toggleItem(item.id)}
            // onClick={() => console.log(props.item.id)}
            className={item.completed ? "completed" : ""}
        >
            <p>{props.item.task}</p>
        </div>
    )
   
}

export default Todo