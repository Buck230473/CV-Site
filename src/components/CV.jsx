import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";


function CV() {

  const [cv, setCv] = useState("1");

  // toggles between cv1 and 2
  function toggle(){

    if (cv === "1") {
    setCv ("2");
    } else {
    setCv ("1");
    }
  }

    return (
      <Zoom in="false">
        <div className = "container-fluid">
          <button type="button" className="btn btn-sm btn-primary btn-cv" onClick={toggle}>Cirriculum Vitae {cv}</button>
          <object className = "cv"
            data= {"https://forexvarsity.com/welcome/wp-content/uploads/2022/07/CV" + cv + ".pdf"}>
          </object>
        </div>
      </Zoom>
   );
}

export default CV;