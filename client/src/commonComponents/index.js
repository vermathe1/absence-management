import React from "react";

export const Tab = (props) => {
  return(
    <ul>
      {props.headings.map((heading,index)=>{
        return <li key={index} onClick={() => props.onTabClick(heading)}> {heading} </li>
      })}
    </ul>
  )
}