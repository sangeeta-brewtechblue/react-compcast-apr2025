import React from 'react';
import Child from './child';

export class Parent extends React.Component{
     constructor(props){
        super(props)
        this.state={counter:0}
        this.incrementCounter=this.incrementCounter.bind(this)
     }

     incrementCounter(event,ctr) {
        this.setState({counter:ctr})
     }


    render(){
        return(
            <div>
                <h3>Parent component</h3>
                <h4>Counter displayed here in parent {this.state.counter}</h4>
                <Child increment={this.incrementCounter}></Child>
            </div>
        )
    }


}