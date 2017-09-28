import React, {Component} from 'react';
import './NewTask.css';
import {Well}  from 'react-bootstrap';


class NewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValue: '',
            isChecked: false,
            checkBoxHidden: props.toggleAllHidden
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return(
            <div>
                {/* <input className="checkbox" type="checkbox" onChange={this.handleCheckboxChange} /> */}
                <input className="task-input" type="text" placeholder="What needs to be done?" onChange={this.handleTextChange} onKeyDown={this.handleKeyDown} value={this.state.textValue} autoFocus />
            </div>
        )
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

        if (code == 13 && this.state.textValue.length > 0) {
            this.handleSubmit(evt);
        }
    }

    handleSubmit(evt) {

        this.props.onTaskAdd(this.state.textValue);

        this.setState({
            textValue: '',
        })
    }

}


export default NewTask;
