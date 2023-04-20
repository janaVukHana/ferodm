import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Asortiman from './views/Asortiman'
import Zice from './views/Zice'
import Stubovi from './views/Stubovi'
import Ekseri from './views/Ekseri'
import Srafovi from './views/Srafovi'
import Stolarija from './views/Stolarija'
import Moleraj from './views/Moleraj'
import Alat from './views/Alat'
import Htz from './views/Htz'
import Basta from './views/Basta'
import Varenje from './views/Varenje'
import Plastika from './views/Plastika'
import Elektro from './views/Elektro'
import Contact from './views/Contact'
import AboutUs from './views/AboutUs'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/asortiman" element={<Asortiman />} />
            {/* Asortiman static show pages */}
            <Route path="/asortiman/zice" element={<Zice />} />
            <Route path="/asortiman/stubovi" element={<Stubovi />} />
            <Route path="/asortiman/ekseri" element={<Ekseri />} />
            <Route path="/asortiman/srafovi" element={<Srafovi />} />
            <Route path="/asortiman/stolarija" element={<Stolarija />} />
            <Route path="/asortiman/moleraj" element={<Moleraj />} />
            <Route path="/asortiman/alat" element={<Alat />} />
            <Route path="/asortiman/htz" element={<Htz />} />
            <Route path="/asortiman/basta" element={<Basta />} />
            <Route path="/asortiman/varenje" element={<Varenje />} />
            <Route path="/asortiman/plastika" element={<Plastika />} />
            <Route path="/asortiman/elektro" element={<Elektro />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />

            {/* LOGIN AND DASHBOARD */}
            {/* <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
