import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {

  state = {
    input : ''
  };

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.state.input = ''
  };

	render() {
		return (
      <div className="CreateForm" onSubmit={this.handleSubmit}>
        <form className="form_container" >
          <input value={this.state.input} onChange={this.handleChange} placeholder={'add a song'} />
          <button>추가</button>
        </form>
      </div>
		);
	}
}

export default CreateForm;
