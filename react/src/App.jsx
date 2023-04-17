import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Asortiman from './views/Asortiman'
import Contact from './views/Contact'
import AboutUs from './views/AboutUs'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/asortiman" element={<Asortiman />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/contact-us/:id" element={<Protected><Message /></Protected>} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
