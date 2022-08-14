import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';
import './LoginStyles.css'

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            autheraized:false
        }
    } 

    onSubmithandle = (e) =>{
        e.preventDefault();
        if(this.state.email == "kasunpk256@gmail.com" && this.state.password == "123"){
            // alert(JSON.stringify(this.state));
            this.setState({goToDashboardPge: true});
            sessionStorage.setItem('token', "[qK5fy5d#KMA*sAf");
        }
        else{
            alert("IIncorrect E-mail or Password");
        }
        // console.log(this.state.email)
    }
    
    onChangehandler = (e) =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        });
    }


    render() {
        if(this.state.goToDashboardPge) {
            return <Navigate to={{pathname:'/dashboard'}}/>
        }
        return (
            <div className='login-container'>
                <div className="login-form ">
                <form onSubmit={this.onSubmithandle}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={this.state.email}
                            onChange={this.onChangehandler}/>
                        <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name='password'
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.onChangehandler}/>
                    </div>
                    
                    {/* <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div> */}
                    <button type="submit" className="btn login-btn">
                        Login
                    </button>
                </form>
                </div>
                <div className="login-title"> 
                    <h1 className='title'>LOGIN</h1>
                </div>
            </div>
        );
    }
}

export default login;