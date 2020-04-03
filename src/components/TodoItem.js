import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	render() {
    const {type, todo, handleToggle, handleRemove, handleRating} = this.props;

    if(type === 'songs') {
      return (
        <div className="TodoItem">
          <div className="btns">
            <button className="remove" onClick={(e) => { e.stopPropagation(); handleRemove(todo.key)}}> 지우기 </button>
            <button className="decrease" onClick={(e) => { e.stopPropagation(); handleRating('minus', todo.key) }}> - </button>
            <button className="increase" onClick={(e) => { e.stopPropagation(); handleRating('plus', todo.key)}}> + </button>
          </div>
          <div className="stars"> {'❤️'.repeat(todo.rating)} </div>
          <div className="text"> {todo.text} </div>
        </div>
      );
    }else{
      return (
        <div className={`TodoItem ${todo.done ? 'active' : ''}`}
             onClick={() => {handleToggle(todo.key)}}
             key={todo.key}>
          <div className="check">👍</div>
          <div className="btns">
            <button className="remove" onClick={(e) => { e.stopPropagation(); handleRemove(todo.key)}}> 지우기 </button>
            <button className="decrease" onClick={(e) => { e.stopPropagation(); handleRating('minus', todo.key) }}> - </button>
            <button className="increase" onClick={(e) => { e.stopPropagation(); handleRating('plus', todo.key)}}> + </button>
          </div>
          <div className="stars">{(todo.rating).toFixed(1)}</div>
          <div className="text">{todo.text}</div>
        </div>
      );
    }
	}
}

export default TodoItem;
