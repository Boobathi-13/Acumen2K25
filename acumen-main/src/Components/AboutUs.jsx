import React, { useState } from "react"
import poster from '../assets/poster.png'
import { Zoom } from "react-awesome-reveal"
import stars from "../assets/stars.png";
import bottom from "../assets/horizons_train.png";  

function AboutUs() {
    return (
        <div className="text-white relative bg-gradient-to-b from-[rgb(18,11,14)] via-[rgb(52,45,89)] to-[rgb(61,54,109)] overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center my-48" >
              <img src={stars} alt="Bottom Image" className="w-full object-contain scale-150" />
              </div>
            <Zoom bottom>
                <div className="mx-auto mobile-padding" style={{ width: "calc(100%*0.8)", padding:"8rem 2rem" }}>
                    <img src={poster} alt="poster" />
                </div>
            </Zoom>
            <div className="absolute bottom-5 left-0 w-full absolute-bottom">
                <img src={bottom} alt="Bottom Image" className="scale-150" />
            </div>
        </div>
    )
}

export default AboutUs
