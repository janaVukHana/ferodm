import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <p>Main content</p>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default App
