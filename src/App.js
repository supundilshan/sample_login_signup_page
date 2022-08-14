import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Login from './components/login/Login'
import Signin from  './components/signin/Signin';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/DashBoard/Dashboard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        token:null,
    };
}

switchTab = () => {
    this.setState({ token: sessionStorage.getItem('token')});
}
  render() {
    return (
      <div className="App container">
        {/* <Home/>
        <About/> */}
        {/* <NavBar/> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar/>}>
              <Route index element={<Home/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='signin' element={<Signin/>}/>
              <Route path='dashboard' element={<Dashboard switchTab={this.switchTab}/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
