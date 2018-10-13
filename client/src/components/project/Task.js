import React from 'react';
import axios from 'axios';
import { TaskEdit } from './TaskEdit.js';

export const Task = (props)=>{

const  taskDelete = e=>{
    console.log('quiero eleminar esta task!!!')
    axios.delete(`http://localhost:3000/api/tasks/${task._id}`)
    .then( () => {
       console.log('Eliminado task');
       props.onProjectChanged();
    })
    .catch(e =>  console.log("Error deleting task"));
  }

  let task=props.task;
  let onProjectChanged=props.onProjectChanged;

  return(
    <div className="task" style={{border:'1px solid blue', margin:20}}>
      <div><b>Task title: </b>{task.title}</div>
      <div><b>Task description: </b>{task.description}</div>
      <TaskEdit
        title={task.title}
        description={task.description}
        taskID={task._id}
        onProjectChanged={onProjectChanged}
      />
      <button onClick={taskDelete} >Delete this task</button>
    </div>
  )
}
