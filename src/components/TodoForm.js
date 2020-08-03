import React from 'react'

class TodoForm extends React.Component {
    
    
    constructor() {
        super()
        this.state = {
            itemText: ''
        }
    }
    handleChanges = e => {
        this.setState({
            itemText: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.addItem(this.state.itemText)
        this.setState({
            itemText: ''
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name='todo'
                    type='text'
                    value={this.state.itemText}
                    onChange={this.handleChanges}
                />
                <button>Add To-Do</button>
                {/* <button>Clear Completed Tasks</button> */}
            </form>
        )
    }
}

export default TodoForm