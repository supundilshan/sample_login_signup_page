import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';

class Dashboard extends Component {

    componentDidMount(){
        this.props.switchTab();
    }
    render() {
        const token =sessionStorage.getItem('token');
        if (token == null){
            return <Navigate to={'/'}/>
        }
        else{
            return (
                <div>
                    <h1>Dash Board</h1>
                </div>
            );
        }
    }
}

export default Dashboard;