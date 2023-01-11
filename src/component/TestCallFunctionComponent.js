import React from 'react';
import { Outlet, Link } from "react-router-dom";

class UserComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            users:{},
        };
    }

     componentDidMount(){
        fetch('http://localhost:8080/test/1')
        .then((response) => response.json())
        .then((data) => this.setState({users: data}));
    }

    render (){
        const {users}= this.state;      
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td> User Id</td>
                            <td> User First Name</td>
                            <td> User Last Name</td>
                            <td> User Email Id</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {users.accountId}</td>   
                            <td> {users.accountUsername}</td>   
                            <td> {users.accountAge}</td>   
                            <td> {users.accountEmail}</td> 
                        </tr>
                        <tr>
                            <td>
                                
                                    <Link to="/testRoutePage">Test</Link>
                                    <Outlet />
                                
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent