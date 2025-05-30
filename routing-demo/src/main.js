import React, {Component} from 'react';
import  {Link,Outlet } from 'react-router-dom';


class Main extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Cars!!</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/home"  activeClassName="active">Home</Link></li>
                               
                                <li><Link to="/about" activeClassName="active">About</Link></li>
                                <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
                <div className="container">

                    
                </div>
            </div>
        );
    }







}



export default Main