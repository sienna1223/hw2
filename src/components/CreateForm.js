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
	  const vowel = ['a','e','i','o','u'];
	  const type = vowel.indexOf(this.props.type.charAt(0).toLowerCase()) > -1
                    ? `an ${this.props.type}`
                    : `a ${this.props.type}`;

		return (
      <div className="CreateForm" onSubmit={this.handleSubmit}>
        <form className="form_container" >
          <input value={this.state.input} onChange={this.handleChange} placeholder={`add ${type}`} />
          <button>추가</button>
        </form>
      </div>
		);
	}
}

export default CreateForm;
