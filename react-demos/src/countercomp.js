import React from 'react'

export default class CounterComp extends React.Component {

      constructor(props){
        super(props)
        this.state={
            counter:0
        }
        this.increment = this.increment.bind(this)
      }

     increment(){
        this.setState(
            {counter : this.state.counter + 1}
        );

     }
      
      
      render(){
        return(
            <div>
                <h2>This is counter example</h2>
                <h3>Value of counter is {this.state.counter}</h3>
                <h4>Incremented by {this.props.user}</h4>
                <button onClick={this.increment} >Click</button>
            </div>
        )



      }


}

 