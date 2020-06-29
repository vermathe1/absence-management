import React from "react";
import styles from '../styles/home.module.css';

export const Tab = (props) => {
  const handleClick = (heading) => {
    props.onTabClick(heading)
  }
  return(
    <ul className={styles.tab}>
      {props.headings.map((heading,index)=>{
        return <li className ={styles.childTab} key={index} onClick={(e) =>handleClick(heading)}> {heading} </li>
      })}
    </ul>
  )
}