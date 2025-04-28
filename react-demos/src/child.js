import React from 'react';
export default class Child extends React.Component{
        constructor(props){
            super(props)
            this.state={
                ctr:0
            }
            this.incrementCtr=this.incrementCtr.bind(this)
        }
      
        incrementCtr(event){
            this.setState({ctr:this.state.ctr + 1})
            this.props.increment(event,this.state.ctr)
        }

    render(){
        return(
            <div>
                <h3>Child component</h3>
              <button onClick={this.incrementCtr}>Increment</button>
            </div>
        )
    }



}