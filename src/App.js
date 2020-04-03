import React, { Component } from 'react';
import './App.css';

import './components/TodoList.css';
import CreateForm from './components/CreateForm';
// import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

class App extends Component {

	state  = {
    type : 'songs',
    songs : [],
    apps : []
	};

  key = 1;

	handleSubmit = (text) => {
	  const {type} = this.state;

	  if(text) {
      this.setState({
        [type] : this.state[type].concat({
          key : this.key++,
          text,
          done : false,
          rating : 0.0,
        }),
      })
    }else{
	    alert('내용을 입력해주세요.')
    }
	};

	handleRemove = (key) => {
    const {type} = this.state;

		this.setState({
      [type] : this.state[type].filter(todo => {
				return key !== todo.key;
			})
		})
  };

  handleRating = (action, key) => {
    const {type} = this.state;
    const star = {
      min : 0,
      max : 5
    };
    const score = {
      min : 0.0,
      max : 9.9
    };

    this.setState({
      [type] : this.state[type].map(todo => {
        if(key === todo.key){
          if(type === 'songs'){
            if(action === 'plus' && todo.rating < star.max)
              return {...todo, rating : ++todo.rating };
            else if (action === 'minus' && todo.rating > star.min)
              return {...todo, rating : --todo.rating };
            else
              return todo;

          }else{
            if(action === 'plus' && todo.rating < score.max)
              return {...todo, rating : todo.rating + 0.1};
            else if (action === 'minus' && todo.rating > score.min)
              return {...todo, rating : todo.rating - 0.1 };
            else
              return todo;
          }
        }else{
          return todo;
        }
      })
    })
  };



  handleToggle = (key) => {
    const {type} = this.state;

    this.setState({
      [type] : this.state[type].map(todo => {
        if(key === todo.key){
          return {...todo, done : !todo.done}
        }else{
          return todo;
        }
			})
		})
  };

  handleTabToggle = (type) => {
    this.setState({
      type
    })
  };

	render() {
	  const {type} = this.state;

		return (
			<div className="App">
        <ul className="tabMenu">
          <li onClick={() => {this.handleTabToggle('songs')}} className={type === 'songs'? 'on' : ''}> SONGS </li>
          <li onClick={() => {this.handleTabToggle('apps')}} className={type === 'apps'? 'on' : ''}> APPS </li>
        </ul>
				<h3>LIST of {type.toUpperCase()}</h3>
        <CreateForm type={type} onSubmit={this.handleSubmit}/>

				<div className="TodoList">
          {this.state[type].map(todo => {
            return(
              <TodoItem
                key={todo.key}
                type={type}
                todo={todo}
                handleToggle={this.handleToggle}
                handleRemove={this.handleRemove}
                handleRating ={this.handleRating}
              />
            )
          })}
				</div>
			</div>
		)
	}

}

export default App;
