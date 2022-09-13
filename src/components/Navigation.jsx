import React from "react";

function Navigation() {

  return (

  <div className="container-fluid">

    <nav className="navbar navbar-expand-lg">

        <a className="navbar-brand" href="./">
          <img className="img-responsive" alt ="logo" width="230px" height="" src="https://www.chriswrite.com/wp-content/uploads/2021/12/logo-new.png"/>
        </a>

        <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="./Motivation">MOTIVATION</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./CV">CV</a>
            </li> 
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="./References" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              REFERENCES
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="./FXV">Forex Varsity</a>
              <a className="dropdown-item" href="./Character">Character Castings</a>
            </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Examples">EXAMPLES</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="./Forex">FOREX</a>
            </li> 
          </ul>
        </div>

    </nav>

  </div>

  );
}
  
export default Navigation;