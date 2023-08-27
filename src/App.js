import React from 'react'
import Universites from './componets/Universites';
import Nav from './componets/Nav';
import './StyleSheet/App.css'
import Mentors from './componets/Mentors';
import Advisor from './componets/Advisor';
import Footer from './componets/Footer';

const App = () => {
  return (
    <div style={{overflowX:"hidden"}}>
      <Nav/>
      <Universites/>
      <Mentors/>
      <Advisor/>
      <Footer/>
    </div>
  )
}

export default App
