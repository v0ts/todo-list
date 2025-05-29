import { Component } from "react";

import { StyledTodoEditor } from "./StyledTodoEditor";

export class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  createTask = (e) => {
    e.preventDefault();
    
    if (this.state.textValue.trim() !== "") {
      this.props.onCreateTask(this.state.textValue);
      this.setState({ textValue: "" });
    }
  }

  render() {
    const { textValue } = this.state;

    return (
      <StyledTodoEditor>
        <input type="text" value={textValue} onChange={this.handleChange} placeholder="Enter task..." />
        <button type="button" onClick={this.createTask}>Add</button>
      </StyledTodoEditor>
    );
  }
}
