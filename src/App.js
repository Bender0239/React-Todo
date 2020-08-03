import React from 'react';
import ReactDom from 'react-dom'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { v4 as uuid } from 'uuid'
import './components/Todo.css'

const listValues = [
  {
    task: '',
    id: uuid(),
    completed: false
  },
  
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super()
    this.state = {
      list: listValues
    }
  }

  toggleItem = id => {
    
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.id !== id){
          return item;
        } else {
          return {...item, 
            completed: !item.completed}
        }
      })
    })
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: uuid(),
      purchased: false
    }
    this.setState({
      list: [...this.state.list, newItem]
    })
  }
  handleRemove = () => {
    const newTodos = this.state.list.filter((item) => !item.completed)
    this.setState({
      list: newTodos
    })
  }

  render() {
    return (
      <div>
        <h2>To-Do List: MVP</h2>
        <TodoList handleRemove={this.handleRemove} list={this.state.list} toggleItem={this.toggleItem}/>
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
