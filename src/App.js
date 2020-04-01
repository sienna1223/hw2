import React, { Component } from 'react';
import './App.css';

import './components/CreateForm.css';
import './components/TodoList.css';
import './components/TodoItem.css';
// import CreateForm from './components/CreateForm';
// import TodoList from './components/TodoList';

class App extends Component {

	state  = {
		todos : [],
		input : ''
	}
	
  key = 1;

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			todos : this.state.todos.concat({
        key : this.key++,
        text : this.state.input,
        done : false
			}),
			input : ''
    })
    
	}

	handleChange = (e) => {
		this.setState({
			input : e.target.value
		})
	}

	handleRemove = (key) => {
		this.setState({
			todos : this.state.todos.filter(todo => {
				return key !== todo.key;
			})	
		})
  }
  
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
  }

	render() {
		return (
			<div className="App">
				<h3>LIST of SONGS</h3>

				<div className="CreateForm" onSubmit={this.handleSubmit}>
					<form className="form_container" >
						<input value={this.state.input} onChange={this.handleChange} placeholder={'add a song'} />
						<button>추가</button>
					</form>
				</div>

				<div className="TodoList">
					{this.state.todos.map(todo => {
						return (
              <div className={`TodoItem ${todo.done ? 'active' : ''}`} 
                   onClick={() => {this.handleToggle(todo.key)}}
                   key={todo.key} >
								<div className="check">&#10004; &#10027;</div>
								<div className="remove" onClick={(e) => {e.stopPropagation(); this.handleRemove(todo.key)}} >[지우기]</div>
								<div className="text">{todo.text}</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<h3>TODO LIST</h3>
	// 			<CreateForm />
	// 			<TodoList />
	// 		</div>
	// 	);
	// }

}

export default App;
