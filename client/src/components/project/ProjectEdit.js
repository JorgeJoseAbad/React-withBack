import React from 'react';
import axios from 'axios';

export class ProjectEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:props.title,
            description:props.description
        };
    }

    submitForm = e => {
        axios.put(`http://localhost:3000/api/projects/${this.props._id}`, this.state)
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
              <label>Title</label>
              <input type="text" value={title} onChange={e=> this.setState({title:e.currentTarget.value})}/>
              <label>Description</label>
              <input type="text" value={description} onChange={e=> this.setState({description:e.currentTarget.value})}/>
              <button
                style={{backgroundColor:'Azure', margin:5}}
                onClick={this.submitForm}>
                Edit and update this project
              </button>
            </div>
        );
    }
}
