import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Connect from './components/Connect/Connect';


const App = () => {
  return (
    <div className='MainPage'>
      <div className='pageContainer'>
      <Header/>
      <Services/>
      <Connect/>

      </div>
    </div>
  )
}

export default App
