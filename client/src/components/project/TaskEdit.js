import React,{Component} from 'react';
import axios from 'axios';

export class TaskEdit extends Component{
  constructor(props){
    super(props);
    this.state={
      title:props.title,
      description:props.description,
      taskID:props.taskID
    }
  }

  submitForm=e=>{
    console.log(this.props);
    axios.put(`http://localhost:3000/api/tasks/${this.state.taskID}`,this.state)
    .then( () => {
        if(this.props.onProjectChanged){
            this.props.onProjectChanged();
        }
    })
  }

  render(){
      let {title, description} = this.state;
    return (
      <div>
        <b>Edit this task</b>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={e=> this.setState({title:e.currentTarget.value})}/>
          <label>Description</label>
          <input type="text" value={description} onChange={e=> this.setState({description:e.currentTarget.value})}/>
          <button style={{backgroundColor:'Azure', margin:5}} onClick={this.submitForm}>Edit and update this task</button>
        </div>
      </div>
    )
  }
}
