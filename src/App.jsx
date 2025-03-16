import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/1-Header/Header'
import Banner from './components/2-Banner/Banner'
import WhoWeAre from './components/3-WhoWeAre/WhoWeAre'
import WhatWeDo from './components/4-WhatWeDo/WhatWeDo'
import Portfolio from './components/6-Portfolio/Portfolio'
import Footer from './components/5-Footer/Footer'
import OurEvents from './components/OurEvents/OurEvents'
import Career from './components/8-Career/Career'
import GetStart from './components/9-GetStart/GetStart'
function App() {
  const [language, setLanguage] = useState(true)

  const Home = () => (
    <>
      <Banner />
      <WhoWeAre language={language} />
      <WhatWeDo language={language} />
    </>
  )

  return (
    <Router>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio language={language} />} />
        <Route path="/our-events" element={<OurEvents language={language} />} />
        <Route path="/careers" element={<Career language={language} />} />
        <Route path="/get-start" element={<GetStart language={language} />} />
      </Routes>
      <Footer language={language} />
    </Router>
  )
}

export default App