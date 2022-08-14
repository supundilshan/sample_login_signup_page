import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Login from './components/login/Login'
import Signin from  './components/signin/Signin';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/DashBoard/Dashboard';

function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
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
            <Route path='dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
