import React from "react";
import styles from "./Dashboard.module.css";
import india from "../pictures/india.png";
import singapore from "../pictures/singapore.png";
import HongKong from "../pictures/hong-kong.png";
const CountryComparision = () => {
  return (
    <div className={`col`}>
      <br />
      <div className={styles.starter}>
        <h6 className={styles.header}>Comparision&nbsp;&nbsp;</h6>
        <button className={styles.expand}>View all</button>
      </div>
      <div className={`card`}>
        <div className={styles.starter} style={{ marginTop: "2%" }}>
          <img
            src={india}
            alt="india"
            className={styles.icons}
            style={{ marginTop: "0.8%" }}
          ></img>
          &nbsp;
          <p className={styles.flagName}>India</p>
        </div>
        <div className={styles.starters}>
          <div className={styles.bar}></div>
          <div>72%</div>
        </div>
        <div className={styles.starter} style={{ marginTop: "2%" }}>
          <img
            src={singapore}
            alt="singapore"
            className={styles.icons}
            style={{ marginTop: "0.8%" }}
          ></img>
          &nbsp;
          <p className={styles.flagName}>Singapore</p>
        </div>
        <div className={styles.starters}>
          <div className={styles.bar} style={{ width: "54%" }}></div>
          <div>54%</div>
        </div>
        <div className={styles.starter} style={{ marginTop: "2%" }}>
          <img
            src={HongKong}
            alt="HongKong"
            className={styles.icons}
            style={{ marginTop: "0.8%" }}
          ></img>
          &nbsp;
          <p className={styles.flagName}>HongKong</p>
        </div>
        <div className={styles.starters}>
          <div className={styles.bar} style={{ width: "23%" }}></div>
          <div>23%</div>
        </div>
      </div>
    </div>
  );
};

export default CountryComparision;
