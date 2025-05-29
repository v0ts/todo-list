import { Component } from "react";

import { StyledTodoList } from "./StyledTodoList";

export class TodoList extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.tasks !== prevProps.tasks) {
            localStorage.setItem("todos", JSON.stringify(this.props.tasks));
        }
    }

    componentDidMount() {
        const savedTodos = localStorage.getItem("todos");

        if (savedTodos) {
            this.props.onLoad(JSON.parse(savedTodos));
        }
    }


    render() {
        const { tasks, onToggle, onDelete } = this.props;

        return (
            <StyledTodoList>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
                        <p>{task.text}</p>
                        <button type="button" onClick={() => onDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </StyledTodoList>
        );
    }
}