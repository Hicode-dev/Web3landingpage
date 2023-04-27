// import { useState } from 'react'


import './App.css'
import Body from './components/Body1'
import Box from './components/Box'
import Box2 from './components/Box2.'
import Companies from './components/Companies'
import CryptoProfile from './components/CryptoProfile'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Slider from './components/Slider'

function App() {

  return (
   <>
<div className="bg-[#010725]">
<Navbar />
<Body />
<Companies />
<CryptoProfile />
<Box />
<Box2 />
<Newsletter />
<Slider />
</div>
   </>
  )
}

export default App
