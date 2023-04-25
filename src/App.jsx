// import { useState } from 'react'

import './App.css'
import Body from './components/Body1'
import Companies from './components/Companies'
import CryptoProfile from './components/CryptoProfile'
import Navbar from './components/Navbar'

function App() {

  return (
   <>
<div className="bg-[#010725]">
<Navbar />
<Body />
<Companies />
<CryptoProfile />

</div>
   </>
  )
}

export default App
