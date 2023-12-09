import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-600'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App