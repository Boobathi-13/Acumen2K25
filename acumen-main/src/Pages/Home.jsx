import React, {useState} from "react"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import Landing from '../Components/Landing'
// import Header from '../Components/header'
import VantaBg from '../Components/VantaBg'
import Events from '../Components/Events'

function Home(){
    return (
        <div>
            {/* <Header/> */}
            <NavBar/>
            <Landing/>
            <AboutUs/>
            <Events/>
            <Footer/>
           
        </div>
       
    );
}

export default Home;
