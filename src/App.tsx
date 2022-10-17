import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import './App.css'
import { setupIonicReact } from '@ionic/react'
import Details from './Components/Details'

setupIonicReact()
function App() {
  return (
    <div className='App'>
      <Details />
    </div>
  )
}

export default App
