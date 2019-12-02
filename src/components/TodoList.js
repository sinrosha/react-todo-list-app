import React from "react"


class TodoList extends React.Component {

    state = {
        newTodo: "",
        todos: []
    }

    handleChange = (e) => {
        this.setState({
            newTodo: e.target.value
        });
    }

    addTodo = (e) => {
        e.preventDefault();
        this.setState( state => {
            if(this.state.newTodo.length === 0) {
                return;
            }
            return {
                todos: state.todos.concat(state.newTodo),
                newTodo: ""
            }
        })
    }

    deleteTodo = (index) => {
        this.setState(state => {
            const list = state.todos.filter((item, j) => index !== j);
            return {
              todos: list,
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <form className="add-todos" onSubmit={this.addTodo}>
                    <input 
                        type="text"
                        value={this.state.newTodo}
                        placeholder="Enter a todo item"
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>  
                </form>
                { this.state.todos.length > 0 && <p>Things todo today</p>}
                <ul>
                    {this.state.todos.map( (todo, index) => ( 
                    <li key={todo} >
                        <p>{todo}</p>
                        <span onClick={ () => this.deleteTodo(index)}>X</span>
                    </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

export default TodoList