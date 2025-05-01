
import React from 'react';
export default class ControlledForm extends React.Component {
   constructor(props){
    super(props)
    this.state={name:'some'}
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
   }

   handleChange(event){
    this.setState({name:event.target.value})

   }
   handleSubmit(event){
    event.preventDefault();
    alert('A name was submitted: ' + this.state.name);
  //  this.setState({name:''})
    return false

   }
   render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <button type="submit">Submit</button>  
            </form> 
            <p>You have entered {this.state.name}</p>                    
        </div>
    )
   }

  
  };