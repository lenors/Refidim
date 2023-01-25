import logo from './logo.svg';
import './App.css';
import Home from '../src/Pages/Home'
import { GlobalStyle } from './Pages/Styles/Globalstyle';

import React from 'react'


const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Home/>
      
    </div>
  )
}

export default App
