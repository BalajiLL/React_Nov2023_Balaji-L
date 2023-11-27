// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import Register from './register';
import './styles.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Menu/>}/>
          <Route exact path='/lo' element={<Login/>}/>
          <Route exact path='/re' element={<Register/>}/>
        </Routes>
      </Router>
{/* <Login/> */}
  
    </div>
  );
}

export default App;
