import React,{Component} from 'react';
import axios from 'axios';
import { SingleProjectLoader } from './SingleProjectLoader';

export class ListProjectLoader extends Component {
    constructor(){
        super();
        this.state = {
            projects: null,
            loading: true
        }
    }

    componentWillMount(){
        this.refetchAll();
    }

    refetchAll(){
        let url = `http://localhost:3000/api/projects/`;
        axios.get(url)
             .then(res => {
                 this.setState({projects: res.data, loading: false});
             })
             .catch(e =>  console.log("EROOR PIDIENDO PROYECTO"));
    }

    //[...this.state.proyects, res.data]

    render(){
        let {projects, loading} = this.state;
        if(!loading){
            return (
                <div
                  className="proyect-panel"
                  style={{
                    border:'2px solid green',
                    padding:'5px',
                    margin:'10px'
                  }}>
                  <h2>Proyect Panel</h2>
                  <button onClick={()=> this.refetchAll()}>Reload projects</button>
                  {projects.map(project => (
                    <SingleProjectLoader
                      key={project._id}
                      project={project}
                      editable
                    />
                  ))}
                </div>
            )
        }else{
            return <p>Loading...</p>
        }
    }
}
