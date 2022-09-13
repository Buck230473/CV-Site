import React from "react";
import Carousel from "./Carousel";
import logo from "../assets/forexvarsitylogo.jpg";
import FXVChris from "../assets/FXVChris.jpg";
import Zoom from "@mui/material/Zoom";

function Forex() {

  return (

    <Zoom in="false">
      <div className="container">

        <img className="fxv-logo" src = {logo} alt = "FXV Logo" />


        <div className="row">
          <div className="col-lg-12">
            <img className = "fxvimage" src = {FXVChris} alt = "Chris's class"/>
          </div>
        </div>

        <Carousel />

        <div className="row pdfs">
          <h1 className = "ebooks-heading">eBooks & Manual<br></br>that I wrote and designed</h1>
          <div className="col-lg-6">
            <button type="button" className="btn btn-fxv btn-sm btn-primary" data-toggle="popover" title="FXV eBook" data-content="I have written and designed eBooks on Forex, Stocks, Gold and Crypto Currencies.">FXV eBook</button>
            <object className="pdf-left"
              data= {"https://forexvarsity.com/welcome/wp-content/uploads/2020/09/Forex-Varsity-eBook.pdf"}>
            </object>
          </div>

          <div className="col-lg-6">
           <button type="button" className="btn btn-fxv btn-sm btn-primary" data-toggle="popover" title="FXV Course Manual" data-content="During my time at Forex Varsity I wrote and designed a comprehensive Professional Trading Course Manual">FXV Course Manual</button>
            <object className="pdf-right"
              data= {"https://forexvarsity.com/welcome/wp-content/uploads/2020/09/3-Day-Professional-Trading-Course.pdf"}>
            </object>
          </div>

        </div>
        
      </div>
    </Zoom>
    
  );

}



export default Forex;