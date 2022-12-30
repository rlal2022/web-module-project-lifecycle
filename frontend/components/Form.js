import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.input);
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  onClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          value={this.props.input}
          onChange={this.onChange}
          placeholder="Enter Task"
        />
        <button onClick={this.onClear}>Hide Finished Tasks</button>
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}
