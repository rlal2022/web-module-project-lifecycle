import React from "react";
import axios from "axios";
import TodoList from "./TodoList";
import Form from "./Form";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  fetchTodos = () => {
    axios.get(URL).then((res) => {
      this.setState({ todos: res.data.data }).catch((err) =>
        console.error("there is an error")
      );
    });
  };

  componentDidMount() {
    this.fetchTodos();
  }

  newTask = (task) => {
    const newTodo = {
      name: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  showTodos = (todoId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>

        <TodoList showTodos={this.showTodos} todos={this.state.todos} />
        <Form submit={this.newTask} />
      </div>
    );
  }
}
