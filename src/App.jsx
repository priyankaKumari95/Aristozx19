import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/indexPage/Index';
import NotFound from './shared/NotFound';
import Boarding from './pages/Boarding/Boarding';
import Login from './pages/login/Login';
import Home from './pages/home/home';
import UserInfo from './pages/userInfo/UserInfo';

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          {/* <Route path="/boarding" element={<Boarding />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-info" element={<UserInfo />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/settings" element={<Settings />} /> */}
          {/* <Route path="/wallet" element={<Wallet />} /> */}
          {/* <Route path="/exchange" element={<Exchange />} /> */}
          {/* <Route path="/notifications" element={<Notifications />} /> */}
          {/* <Route path="/help" element={<Help />} /> */}
          {/* <Route path="/terms" element={<Terms />} /> */}
          {/* <Route path="/privacy" element={<Privacy />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/faq" element={<FAQ />} /> */}
          {/* <Route path="/blog" element={<  Blog />} /> */}
          {/* <Route path="/careers" element={<Careers />} /> */}
          {/* <Route path="/press" element={<Press />} /> */}
          {/* <Route path="/developers" element={<Developers />} /> */}
          {/* <Route path="/api" element={<API />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
