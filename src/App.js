import Home from './components/Home';
import About from './components/About';
import Login from './components/login/Login'
import Signin from  './components/signin/Signin';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <About/> */}
      <NavBar/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<About/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signin' element={<Signin/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
