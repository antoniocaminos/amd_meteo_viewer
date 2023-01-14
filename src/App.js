import React from 'react'
import NavBar from './Components/NavBar'
import Aside from './Components/AsideStations'
import Mission1A from './Components/PanelMission1A'
import Mission1B from './Components/PanelMission1B'
import Card from './Components/PanelCard'
import GenList from './Components/PanelGenList'
import Footer from './Components/Footer'
import './App.css'


export const App = () => {
  return (
    <div className='layaout'>
    <div className='navbar'>
      <NavBar />
    </div>
    <div className='aside'>
      <Aside />
    </div>
    <div className='mission1a'>
      <Mission1A />
    </div>
    <div className='mission1b'>
      <Mission1B />
    </div>
    <div className='card'>
      <Card />
    </div>
    <div className='genlist'>
      <GenList />
    </div>
    <div className='footer'>
      <Footer />
    </div>
  </div>
  )
}
export default App


    /*  */