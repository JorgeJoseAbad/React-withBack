import React from 'react';
import { ProjectEdit } from './ProjectEdit';

export const ProjectItem = ({title, description, tasks, _id, editable=false, onProjectChanged}) => {
    let project = {title, description, tasks, _id}
    return (
        <div style={{border:'1px solid red', margin:20}}>
            <h1>Project: {title}</h1>
            <p>Description: {description}</p>
            <div className="tasks">
                {tasks.length > 0 ?
                <ul>
                    {tasks.map((task,i) => <li key={i}>{task}</li>)}
                </ul>
                :
                <p>There are no pending tasks</p>
                }
            </div>
            { editable && <ProjectEdit {...project} onProjectChanged={onProjectChanged}/> }
        </div>
    )
}