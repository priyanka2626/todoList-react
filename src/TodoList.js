import React,{component, Component} from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

class TodoList extends Component{

    state={todos:[]}
    create=(newTodo)=>{
        this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }

    remove=(id)=>{
        this.setState({
            todos: this.state.todos.filter(t=>t.id !=id)
        })
    }
    update=(id,updateTask)=>{
        const updatedTodos=this.state.todos.map(todo=>{
            if(todo.id==id){
                return{...todo,task:updateTask}
            }
            return todo;
        })
        this.setState({todos:updatedTodos})
    }
    toggleCompletion=(id)=>{
        const updatedTodos=this.state.todos.map(todo=>{
            if(todo.id==id){
                return{...todo,completed : !todo.completed}
            }
            return todo;
        })
        this.setState({todos:updatedTodos})
    }
    render(){
        const todos=this.state.todos.map(todo=>{
            return <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={this.remove}
            updatedTodo={this.update} completed={todo.completed} toggleTodo={this.toggleCompletion}
            />
        })
        
        return(
            <div>
            <h1>Todo</h1>
            <NewTodoForm createTodo={this.create}/>
            <ul>{todos}</ul>
            </div>

        )
    }
}

export default TodoList;