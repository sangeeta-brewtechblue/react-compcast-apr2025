import React from 'react';
export class Timer extends React.Component {

       constructor(props){
        super(props)
        this.state={
            date:new Date()
        }
       }

       componentDidMount(){
        this.timeId = setInterval(()=>this.tick(),1000)
       }

       tick(){
           this.setState({date:new Date()});
       }
        
      render(){
        return(
            <div>
                <h3>It is  {this.state.date.toLocaleString()}</h3>
            </div>
        )
      } 

      componentWillUnmount(){
        console.log('unmounted')
        clearInterval(this.timeId)
      }

}
