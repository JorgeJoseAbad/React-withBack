import React,{Component} from 'react';
import axios from 'axios';

export class TaskCreate extends Component{
  constructor (props){
    super(props)

    this.initialState={
      title:'',
      description:'',
      projectID:this.props.id
    }
    this.state=this.initialState;
  }

  handleChange = event => {
    event.preventDefault()
    const {name,value}=event.target;

    this.setState({
      [name]:value
    })
  }

  submitForm = () => {
    axios.post(`http://localhost:3000/api/tasks/`, this.state)
        .then( (res) => {
               console.log(res);
            })
        }

  render(){
    const {title,description}=this.state;

    return (
      <div>

        <form>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange} />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}/>
          <input
            type="button"
            value="Submit"
            onClick={this.submitForm} />
        </form>
      </div>
    )
  }
}
