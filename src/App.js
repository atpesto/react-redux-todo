import React, { Component } from 'react';

class App extends Component {
  state = {
    value: '',
  }
  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  onClickHandler = () => {
    this.props.addTodo(this.state.value);
    this.setState({
      value: '',
    })
  }

  toggleClickHandler = (id) => {
    this.props.toggleTodo(id);
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.props.todos.map(todo => (
              <li
                key={todo.id}
                onClick={() => {this.toggleClickHandler(todo.id)}}
                style={
                  todo.completed ? {
                    textDecoration: 'line-through',
                    color: 'red',
                  } :
                  {
                    textDecoration: 'initial',
                    color: 'black',
                  }
                }
              >
                {todo.value}
              </li>
            ))
          }
        </ul>

        <input type="text" value={this.state.value} onChange={this.onChangeHandler} />
        <input type="button" value="Add Todo" onClick={this.onClickHandler} />
      </div>
    );
  }
}

export default App;
