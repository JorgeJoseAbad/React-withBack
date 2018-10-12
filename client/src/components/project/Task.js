import React from 'react';
import { TaskEdit } from './TaskEdit.js';

export const Task = (props)=>{

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
    </div>
  )
}
