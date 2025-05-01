import React from 'react';

export default class UncontrolledComp extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + this.inputRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}