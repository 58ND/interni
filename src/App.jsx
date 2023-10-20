import React from 'react'
import './App.css'
import SecSeven from './components/secseven/SecSeven'
import SecThree from './components/secthree/SecThree'
import SecFour from './components/secfour/SecFour'
// import SecTwo from './components/sectwo/SecTwo'

function App() {
  return (
    <div className="Container">
      {/* <SecTwo/> */}
      <SecThree/>
      <SecFour/>
      <SecSeven/>
    </div>
  ) 
}

export default App
