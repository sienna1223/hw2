import React, { Component } from 'react';
import './App.css';

import './components/TodoList.css';
import CreateForm from './components/CreateForm';
// import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

class App extends Component {

	state  = {
		todos : [],
	};
	
  key = 1;

	handleSubmit = (text) => {
		this.setState({
			todos : this.state.todos.concat({
        key : this.key++,
        text : text,
        done : false
			}),
    })
	};


	handleRemove = (key) => {
		this.setState({
			todos : this.state.todos.filter(todo => {
				return key !== todo.key;
			})	
		})
  };
  
  handleToggle = (key) => {
    this.setState({
			todos : this.state.todos.map(todo => {
        if(key === todo.key){
          return {...todo, done : !todo.done}
        }else{
          return todo;
        }
			})	
		}) 
  };

	render() {
		return (
			<div className="App">
				<h3>LIST of SONGS</h3>
        <CreateForm onSubmit={this.handleSubmit}/>

				<div className="TodoList">
          <TodoItem todos={this.state.todos} handleToggle={this.handleToggle} handleRemove={this.handleRemove} />
				</div>
			</div>
		)
	}

}

export default App;
