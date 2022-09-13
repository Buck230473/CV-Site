import React from "react";
import examples from "../data";
import Row from "./Row";
import Zoom from "@mui/material/Zoom";

function createRow(examples){
  return(
    <Row
      key={examples.id}
      link={examples.githubLink}
      description={examples.githubDesc}
      url={examples.URL}
    />
  );
}

function Examples(props) {

  return (
    <div className="container-fluid table">
      <h1 className = "page-title">Coding Examples & Exercises</h1>
      <Zoom in="false">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">LINK TO GITHUB</th>
              <th scope="col">WORKING URL</th>
            </tr>
          </thead>
          <tbody>
            {examples.map(createRow)}
          </tbody>
        </table>
      </Zoom>
    </div>
  );
}

export default Examples;