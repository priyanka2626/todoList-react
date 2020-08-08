import React,{Component} from 'react';
import uuid from 'uuid/v4'

class NewTodoForm extends Component{

    state={task:""}

    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }

    handleSubmit=(evt)=>{   
        evt.preventDefault();
        this.props.createTodo({...this.state, id:uuid(),completed:false});
        this.setState({
            task:""
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Todo</label>
                <input type='text' name='task' placeholder="new todo" id='task' value={this.state.task} 
                onChange={this.handleChange}/>
                <button>Add Todo</button>
            </form>

        )
    }
}

export default NewTodoForm;