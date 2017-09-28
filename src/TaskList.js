import React, {Component} from 'react';
import './TaskList.css';
import Task from './Task.js'

class TaskList extends Component {

    render() {
        return(
            <div className="list">
                {this.renderList()}
            </div>
        )
    }

    renderList() {
        return this.props.tasks.map(taskText => (
            <Task text={taskText} />
        ))
    }
}

export default TaskList;