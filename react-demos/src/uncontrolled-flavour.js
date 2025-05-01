import React from 'react';
export default class UncontrolledFlavour extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    //event.preventDefault();
    alert('A flavour was submitted: ' + this.input.current.value);
  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your favourite flavour:
           <select name='flavours' ref={this.input}  value={this.input.value}>
            <option value="chocolate">Chocolate</option>
            <option value="vanilla">Vanilla</option>
            <option value="strawberry">Strawberry</option>
            <option value="mango">Mango</option>
            </select>
        </label>
        <p>You have selected {this.input.value}</p>
           <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}