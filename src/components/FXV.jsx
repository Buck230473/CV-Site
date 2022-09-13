import React from "react";
import logo from "../assets/forexvarsitylogo.jpg";
import Zoom from "@mui/material/Zoom";

function FXV() {

  return(
    <Zoom in="false">
      <div className="container-fluid letter">
        <img className="fxv-logo" src={logo} alt="FXV logo"/>
        <p>To whom it may concern,</p>
        <p>Chris has been in my employ since 1 November 2016, and has been a phenomenal asset to my Businesses for the past 6 years. His absolute loyalty and hard work has made him the second in charge of our Nationally based concern. He is an awesome colleague, great thinker, and dedicated member of our team. He has spent the last few years mentoring and training my Clients to the utmost highest standards, and has always promoted the company over and beyond. I highly recommend him for any position that he applies for, you would be insane not to give him the opportunity!</p>
        <p>We are extremely sad to be parting ways, but will remain friends, and fully support his wish to find a new position where he can thrive, like he has with us! I know that he will make a phenomenal success of whatever he decides to tackle next, and with his ever present positive, can do attitude, he will always succeed.</p>
        <p>Please do call me anytime should you wish more detailed information, or simply for a quick discussion.</p>
        <p>We wish Chris all the absolute Best going forward, and he knows that my door is always open to him!</p>
        <p>Kind Regards,</p>
        <p className="signature">Garth L East</p>
        <p className="signature-title">Managing Director</p>
      </div>
    </Zoom>
  )
}

export default FXV;