import React from 'react';
import { ProjectEdit } from './ProjectEdit';
import { TaskCreate } from './TaskCreate.js';
import { Task } from './Task.js';

import './proyect.css';

export const ProjectItem = ({title, description, tasks, _id, editable=false, onProjectChanged}) => {

    let project = {title, description, tasks, _id}

    return (
        <div className="proyect-class" style={{border:'1px solid red', margin:20}}>
          <h2>{title}</h2>
          <b>Description:</b>
          <p>{description}</p>
          <div className="tasks">
            <h3>List of tasks</h3>
            {tasks.length > 0 ?
              <ol>
                {tasks.map((task,i) =>
                  <li key={i}>
                    <Task task={task} onProjectChanged={onProjectChanged}/>
                  </li>)}
              </ol>
            :
            <p>There are no pending tasks</p>
            }
          </div>
          <h3>Add new task</h3>
          <TaskCreate proyectID={_id} onProjectChanged={onProjectChanged}/>
          <h3>Edit this proyect</h3>
          { editable && <ProjectEdit {...project} onProjectChanged={onProjectChanged}/> }
          <button><h5>Delete this proyect</h5></button>
        </div>
    )
}
