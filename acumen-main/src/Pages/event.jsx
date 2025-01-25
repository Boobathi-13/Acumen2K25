import React from 'react'
import Events from '../Components/Events'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
// import Header from '../Components/header'
function event() {
  return (
    <div
        className="relative"
        style={{
            background: "linear-gradient(to bottom, #2c003e, #000000)", // Dark violet to black
            minHeight: "100vh", // Ensures it covers the viewport
            color: "white", // Ensures text is visible on dark background
        }}
    >
    {/* <Header/> */}
    <NavBar/>
    <Events />
    <Footer/>
    </div>
  )
}

export default event