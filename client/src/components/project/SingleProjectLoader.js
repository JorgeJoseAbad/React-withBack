import React,{Component} from 'react';
import axios from 'axios';
import { ProjectItem } from './ProjectItem';

export class SingleProjectLoader extends Component {
    constructor(props){
        super(props);
        this.state = {
            project: props.project,
            loading: props.project ? false : true
        }
    }

    componentWillMount(){
        if(!this.state.project){
            this.getProject();
        }
    }

    getProject(){
        let {_id} = this.state.project;
        let url = `http://localhost:3000/api/projects/${_id}`;
        console.log(url);
        axios.get(url)
             .then(res => {
                 this.setState({project: res.data, loading: false});
             })
             .catch(e =>  console.log("EROOR PIDIENDO PROYECTO"));
    }

    render(){
        let {project, loading} = this.state;
        if(!loading){
            return <ProjectItem {...project} editable={this.props.editable} onProjectChanged={()=> this.getProject()}/>
        }else{
            return <p>Loading...</p>
        }
    }
}
