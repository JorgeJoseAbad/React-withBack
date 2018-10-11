import React from 'react';
import { ProjectEdit } from './ProjectEdit';
import { TaskCreate } from './TaskCreate.js'

export const ProjectItem = ({title, description, tasks, _id, editable=false, onProjectChanged}) => {

    let project = {title, description, tasks, _id}

    return (
        <div style={{border:'1px solid red', margin:20}}>
          <h1>Project: {title}</h1>
          <p>Description: {description}</p>
          <div className="tasks">
            <h5>List of tasks</h5>
            {tasks.length > 0 ?
              <ol>
                {tasks.map((task,i) => <li key={task.title}>
                  <div style={{border:'1px solid blue', margin:20}}>
                    <div>Task title: {task.title}</div>
                    <div>Task description: {task.description}</div>
                  </div>
                </li>)}
              </ol>
            :
            <p>There are no pending tasks</p>
            }
          </div>
          <h3>Add new task</h3>
          <TaskCreate id={_id}/>
            <h3>Edit this proyect</h3>
            { editable && <ProjectEdit {...project} onProjectChanged={onProjectChanged}/> }
        </div>
    )
}
