import React, {Component} from 'react';
import './Task.css';
import {Form} from 'react-bootstrap';

class Task extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isChecked: false,
            textValue: props.text,
            editing: false
        };

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return(
            <div className="task-list-item">
                {this.renderTask()}
            </div>
        )
    }

    handleDoubleClick(evt) {
        this.setState({
            editing: true
        })
    }

    handleTextChange(evt) {
        this.setState({
            textValue: evt.target.value
        });
    }

    handleCheckboxChange(evt) {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    handleKeyDown(evt) {
        let code = (evt.keyCode ? evt.keyCode : evt.which);

        if (code == 13) {
            this.handleSubmit();
        }
    }

    handleSubmit(evt) {
        this.setState({
            editing: false
        })
    }

    renderTask() {
        let element = null;
        
        if (!this.state.editing) {
            element = (
                <div className="task">
                    {/* <input type="checkbox" onChange={this.handleCheckboxChange}/> */}
                    <label className="task-label" onDoubleClick={this.handleDoubleClick}>
                        {this.state.textValue}
                    </label>
                    <button className="delete" />
                </div>
                
            );
        }
        else {
            element = (
                <input 
                    className="editing" 
                    type="text" 
                    value={this.state.textValue} 
                    onChange={this.handleTextChange}
                    onBlur={this.handleSubmit}
                    onKeyDown={this.handleKeyDown}
                    autoFocus />);
        }
    
        return element;
    }
}

export default Task;
