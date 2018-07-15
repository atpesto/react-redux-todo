import { connect } from 'react-redux';

import App from './App';
import { addTodo, toggleTodo } from './actions';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);