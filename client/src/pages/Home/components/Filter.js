import React from "react";
import { Button } from "../../../commonComponents";
import styles from "../../../styles/home.module.css";

export const Filter = ({ headings, activeTab, onTabClick }) => {
  return (
    <Tab
      headings={headings}
      active={activeTab}
      onTabClick={(tab) => onTabClick(tab)}
    />
  );
};

const Tab = ({ headings, active, onTabClick }) => {
  const handleClick = (heading) => {
    onTabClick(heading);
  };
  return (
    <ul className={styles.tab}>
      {headings.map((heading, index) => {
        return (
          <li
            className={
              active === heading
                ? `${styles.childTab} ${styles.activeTab}`
                : styles.childTab
            }
            key={index}
            onClick={(e) => handleClick(heading)}
          >
            {" "}
            <a className={styles.nodecoration} href="#">
              {heading}
            </a>{" "}
          </li>
        );
      })}
    </ul>
  );
};
