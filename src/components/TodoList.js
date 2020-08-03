import React from 'react'
import Todo from './Todo'

const TodoList = props => { 
    const { list, toggleItem, handleRemove } = props
    return(
        <div>
            {list.map(item => {
                
                return <Todo key={item.id} item={item} toggleItem={toggleItem}/> 
        })}
        <button onClick={handleRemove}>Clear Done Todo's</button>
        </div>
    )
}

export default TodoList
