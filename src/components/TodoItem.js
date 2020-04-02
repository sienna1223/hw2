import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	render() {
		return (
		  <>
        {this.props.todos.map(todo => {
          return(
            <div className={`TodoItem ${todo.done ? 'active' : ''}`}
                 onClick={() => {this.props.handleToggle(todo.key)}}
                 key={todo.key} >
              <div className="check">&#10004; &#10027;</div>
              <div className="remove" onClick={(e) => {e.stopPropagation(); this.props.handleRemove(todo.key)}} >[지우기]</div>
              <div className="text">{todo.text}</div>
            </div>
          )
        })}
      </>
		);
	}
}

export default TodoItem;
