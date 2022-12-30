import React from "react";

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.showTodos(this.props.todo.id);
  };
  render() {
    return (
      <li onClick={this.handleClick} key={this.props.todo.id}>
        {this.props.todo.name}
        {this.props.todo.completed ? <p>Task Done!</p> : <p></p>}
      </li>
    );
  }
}
