import React, { Component } from 'react'
import './App.css'
import Header from './Components/header'
import InfoGrid from './Components/InfoGrid'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <InfoGrid />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App
