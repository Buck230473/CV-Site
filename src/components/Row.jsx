import React from "react";

function Row(props) {

  return (

   <tr>
    <td><a href = {props.link}>{props.description}</a></td>
    <td><a href = {props.url}>{props.url}</a></td>
  </tr>
  );
}

export default Row;