import React from 'react';
import { ProjectEdit } from './ProjectEdit';
import { TaskCreate } from './TaskCreate.js'
import { TaskEdit } from './TaskEdit.js';

export const ProjectItem = ({title, description, tasks, _id, editable=false, onProjectChanged}) => {

    let project = {title, description, tasks, _id}

    return (
        <div style={{border:'1px solid red', margin:20}}>
          <h3>Project: {title}</h3>
          <p>Description: {description}</p>
          <div className="tasks">
            <h3>List of tasks</h3>
            {tasks.length > 0 ?
              <ol>
                {tasks.map((task,i) => <li key={task.title}>
                  <div style={{border:'1px solid blue', margin:20}}>
                    <div><b>Task title: </b>{task.title}</div>
                    <div><b>Task description: </b>{task.description}</div>
                    <TaskEdit
                      title={task.title}
                      description={task.description}
                      taskID={task._id}
                      onProjectChanged={onProjectChanged}
                    />
                  </div>
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
