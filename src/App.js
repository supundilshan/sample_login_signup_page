import Home from './components/Home';
import About from './components/About';
import Login from './components/login/Login'
import Signin from  './components/signin/Signin';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <About/> */}
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signin' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
