import React from "react";
import logo from "../assets/CClogo.jpg";
import Zoom from "@mui/material/Zoom";

function Character() {

  return (
    <Zoom in="false">
      <div className="container-fluid letter">
        <img className="character-logo" src={logo} alt = "Character Castings Logo" />
        <p>To whom it may concern,</p>
        <p>It is my pleasure to recommend Chris Daniel for employment. Chris worked for 5 years as a booker at our busy film and television casting agency. He always had a great attitude towards his work and I was always impressed with his productivity and reliability over the years.</p>
        <p>Chris is both very bright and motivated. I am confident that he will devote himself to any other position of his choosing with a high degree of diligence. As a junior he was a fast learner and over the 5 years with the company grew into a senior role and became an invaluable asset.</p>
        <p>Chris was always a likeable member of our team and was able to effectively communicate with our diverse team of staff and database of artistes.</p>
        <p>I wish Chris the best of luck for the future and feel sure that he will make a success of whatever he turns his hands to.</p>   
        <p>Should you have any further questions please feel free to contact me.</p>
        <p>Kind Regards,</p>
        <p className="signature">Lisette O'Donnell</p>
        <p className="signature-title">Managing Director</p>
      </div>
    </Zoom>
  );
}

export default Character;