import React from 'react';
export default class ControlledFlavour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flavour: 'chocolate'
    };
  }

  handleChange = (event) => {
    this.setState({ flavour: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Controlled Flavour</h1>
        <select value={this.state.flavour} onChange={this.handleChange}>
          <option value="chocolate">Chocolate</option>
          <option value="vanilla">Vanilla</option>
          <option value="strawberry">Strawberry</option>
        </select>
        <p>Selected flavour: {this.state.flavour}</p>
      </div>
    );
  }
}