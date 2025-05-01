import React from 'react';
import { withRouter } from 'react-router-dom';  
import USERSERVICE from './user-service';        

class CopyUserDetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {

        const userId = this.props.match.params.id;
        USERSERVICE.getUserById(userId).then(res => {
            this.setState({ user: res.data });
        });
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                <h5>User Details</h5>
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>User ID</td>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <td>User Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>User Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>User Phone</td>
                            <td>{user.phone}</td>
                        </tr>
                    </tbody>   
                </table> 
            </div>
        );
    }       
}           
export default CopyUserDetailComponent;