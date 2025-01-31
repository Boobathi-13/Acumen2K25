import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import "../styles/EventPage.css";
import Modal from "./Model.jsx";
import stars from "../assets/stars.png";
import tech from "../assets/horizons_hogwarts.png";
import nontech from "../assets/horizons_quidditch.png";

function Events() {
  var contest = [
    {
      name: "PAPER PRESENTATION",
      content:
        "Each team having minimum of 1 member and maximum of 3 members can present a paper on any particular technical or core topic. One registration per team is enough. No need for individual registration of participants. Registration Fee is Rs.200 Per head. Papers related to Embedded, VLSI, Communication and Networking, Signal and Image Processing, Artificial Intelligence andMachine Learning, Website, Mobile App, Biomedical and etc are accepted. Prior registration is required to participate in this event. Abstract should not exceed the limit of 400 words. Maximum of 15 slides and minimum of 10 slides should be there in the PPT. The team will get 5 minutes to present their paper followed by a 2 minutes query session. The work should be original and plagiarism must be avoided. Bring soft copy of PPT in pendrive or have it in mail.",
      session: "FORENOON",
      link: "https://forms.gle/kGuwryTnXgnY2N8TA",
    },
    {
      name: "PROJECT PRESENTATION",
      content:
        "Each team having minimum of 1 member and maximum of 3 members can display their project. One registration per team is enough. No need for individual registration of participants. Registration Fee is Rs.200 per head. Hardware/ Prototype should be displayed on the day of the event. It is mandatory, if failed the team will be disqualified. Prior registration isrequired to participate in this event. Abstract should not exceed the limit of 400 words. PPT about the project is optional.",
      session: "FORENOON",
      link: "https://forms.gle/m1vgFF776w641tz59",
    },
    {
      name: "CODATHON",
      content:
        "Each team having maximum of 1 members can participate. One registration per team is enough. No need for individual registration of participants.Participants must have Hackerrank ID. Consists of various rounds.",
      session: "FORENOON",
      link: "https://forms.gle/uruodJDvq2vVX94k7",
    },
    {
      name: "Track Your Way",
      content:
        "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants.",
      session: "FORENOON",
      link: "https://forms.gle/FEtmFUExZS2PiwSX6",
    },
    {
      name: "Picture yourself",
      content:
        "Each team having maximum of 4 members can participate. One registration per team is enough. No need for individual registration of participants.",
      note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.200 Per head.",
      session: "AFTERNOON",
      link: "https://forms.gle/SDTTcmYBAKf42Fax6",
    },
    {
      name: "RHYTHUM GALA",
      content:
        "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants. Consists of various rounds like enacting to identify the song, find the Tamil song from English lyrics, identify the missed word in a song, identify the song which is played.",
      note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.200 Per head.",
      session: "AFTERNOON",
      link: "https://forms.gle/bELAGnTHtMxxnxGGA",
    },
    {
      name: "FUN TROLL",
      content:
        "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants. Consists of various rounds like enacting to identify the song, find the Tamil song from English lyrics, identify the missed word in a song, identify the song which is played.",
      note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.200 Per head.",
      session: "AFTERNOON",
      link: "https://forms.gle/JJfEjd5Xwoiku9qv5",
    },
    {
      name: "SHERLOCK HOLMES",
      content:
        "Each team having maximum of 3 members can participate. One registration per team is enough. No need for individual registration of participants. Consists of various rounds like enacting to identify the song, find the Tamil song from English lyrics, identify the missed word in a song, identify the song which is played.",
      note: "ONLY THOSE WHO HAVE PARTICIPATED IN TECHNICAL EVENT CAN TAKE PART IN NON TECHNICAL EVENT. Registration Fee is Rs.200 Per head.",
      session: "AFTERNOON",
      link: "https://forms.gle/2PsAKcv9T79icPBh8",
    },
    {
      name: "Battery For EV",
      content:
        "A battery for an electric vehicle (EV) is a rechargeable energy storage device specifically designed to power the electric motor(s) that propel the vehicle. It serves as the primary source of energy for the EV, storing electricity generated from external sources such as charging stations or regenerative braking.      Registration fees per head Rs.200",
      session: "9.00 am to 4.30 pm",
      link: "https://forms.gle/qCx9N5Y2ZvyUQ6XAA",
    },
    {
      name: "Drone technology",
      content:
        "Drone technology, also known as unmanned aerial vehicle (UAV) technology, has rapidly advanced in recent years, transforming various industries and enabling a wide range of applications. Drones are essentially flying robots that can be remotely controlled or programmed to fly autonomously using onboard sensors and GPS technology.Registration fees per head Rs.200",
      session: "9.00 am to 4.30 pm",
      link: "https://forms.gle/ehP7gajs7Rw1iPbN8",
    },
    {
      name: "Smart 5G Antenna",
      content:
        "A Smart 5G Antenna is a cutting-edge telecommunications device designed to enhance and optimize 5G wireless communication networks. Unlike traditional antennas, which passively transmit and receive signals, a Smart 5G Antenna incorporates advanced technologies to actively manage and improve signal reception and transmission for 5G-enabled devices.Registration fees per head Rs.200",
      session: "9.00 am to 4.30 pm",
      link: "https://forms.gle/RFWnux5zwKPvNboPA",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [Contest, setContest] = useState(1);
  const handleClick = (event) => {
    setIsOpen((current) => !current);
    setContest(Number(event.target.id));
  };
  return (
    <>
    <div className="text-white relative bg-gradient-to-b from-[rgb(18,12,15)] via-[rgb(42,39,40)] to-[rgb(46,45,45)] overflow-hidden">
    <div className="flex flex-col justify-center items-center w-full py-40" id="events">
    <div className="absolute justify-center bg-cover bg-center absolute-bottom" >
      <img src={stars} alt="Bottom Image" className="w-full object-contain scale-125" />
      </div>
      {/* Technical Events */}
      <Fade left cascade>
        <div className="mb-8">
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)] font-harry">
            Technical Events
          </h1>
        </div>
      </Fade>
  
      <Fade top>
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px]">
          {/* Event Cards */}
          {["Paper Presentation", "Project Presentation", "Codathon", "Track Your Way"].map(
            (event, index) => (
              <div key={index} className="shield flex-1 min-w-[200px] max-w-[250px] text-center">
                <h1 className="p-2 text-[var(--blue)]">{event}</h1>
                <button
                  className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
                  id={index}
                  onClick={handleClick}
                >
                  Register
                </button>
              </div>
            )
          )}
        </div>
      </Fade>
            <div className="absolute bottom-5 left-0 w-full absolute-bottom">
                <img src={tech} alt="Bottom Image" className="scale-150"/>
            </div>
    </div>
    </div>

  
    {/* Non-Technical Events */}
    <div className="text-white relative bg-gradient-to-b from-[rgb(24,21,13)] via-[rgb(63,54,39)] to-[rgb(73,63,47)] overflow-hidden">
    <div className="flex flex-col justify-center items-center w-full py-40">
      <div className="absolute justify-center bg-cover bg-center absolute-bottom" >
      <img src={stars} alt="Bottom Image" className="w-full object-contain scale-125" />
      </div>
      <Fade left cascade>
        <div className="mb-8">
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)] font-harry">
            Non-Technical Events
          </h1>
        </div>
      </Fade>
  
      <Fade top>
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px]">
          {["Picture Yourself", "Rhythm Gala", "Fun Troll", "Sherlock Holmes"].map((event, index) => (
            <div key={index} className="shield flex-1 min-w-[200px] max-w-[250px] text-center">
              <h1 className="p-2 text-[var(--blue)]">{event}</h1>
              <button
                className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
                id={index + 4}
                onClick={handleClick}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </Fade>
            <div className="absolute bottom-5 left-0 w-full absolute-bottom">
                <img src={nontech} alt="Bottom Image" className="scale-150"/>
            </div>
    </div>
    </div>
  
    {/* Workshops */}
    <div className="text-white relative bg-gradient-to-b from-[rgb(14,8,18)] via-[rgb(46,34,58)] to-[rgb(55,41,68)] overflow-hidden">
    <div className="flex flex-col justify-center items-center w-full py-40">
      <div className="absolute justify-center bg-cover bg-center absolute-bottom" >
      <img src={stars} alt="Bottom Image" className="w-full object-contain scale-125" />
      </div>
      <Fade left cascade>
        <div className="mb-8">
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)] font-harry">
            Workshops
          </h1>
        </div>
      </Fade>
  
      <Fade top>
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px]">
          {["Battery For EV", "Drone Tech", "Smart 5G Antenna"].map((workshop, index) => (
            <div key={index} className="shield flex-1 min-w-[200px] max-w-[250px] text-center">
              <h1 className="p-2 text-[var(--blue)]">{workshop}</h1>
              <button
                className="bg-[#2e2a2a] text-white text-lg w-[200px] rounded-md font-medium mx-auto py-2 my-4 shield-button"
                id={index + 8}
                onClick={handleClick}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </Fade>
      <div>
        {isOpen && (
          <Modal
            setIsOpen={setIsOpen}
            handleClick={handleClick}
            Content={contest[Contest]}
          />
        )}
      </div>
            <div className="absolute bottom-5 left-0 w-full absolute-bottom">
                <img src={tech} alt="Bottom Image" className="scale-150"/>
            </div>
    </div>
  </div>
  </>
  );
}

export default Events;
