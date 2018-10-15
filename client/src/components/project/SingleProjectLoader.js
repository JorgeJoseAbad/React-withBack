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

    taskDelete = (id)=>{
        console.log('quiero eleminar esta task!!!')
        axios.delete(`http://localhost:3000/api/tasks/${id}`)
        .then( () => {
           console.log('Eliminado task');
           this.getProject();
        })
        .catch(e => console.log("Error deleting task"));
      }

    tasksDelete = (tasks,projID)=>{
      console.log("hola");
      console.log(tasks);
      tasks.map((task)=>{
        console.log(task._id)
        this.taskDelete(task._id)
      });
      tasks=[];
      this.props.onDeleteProject(projID);
    }

    render(){
        let {project, loading} = this.state;
        if(!loading){
            return <ProjectItem {...project}
              editable={this.props.editable}
              onProjectChanged={()=> this.getProject()}
              onTasksDelete={(tasks,projID)=>this.tasksDelete(tasks,projID)}/>
        }else{
            return <p>Loading...</p>
        }
    }
}
