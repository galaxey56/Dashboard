import React from "react";
import green from "../pictures/green.png";
import red from "../pictures/red.png";
import styles from "./Dashboard.module.css";
import up from "../pictures/triangle.png";
import down from "../pictures/down.png";
const CountryChart = () => {
  return (
    <div className={`${styles.countrycoms} row`}>
      <div className={`card col ${styles.lborder}`}>
        <span className={styles.stag}>&nbsp;&nbsp;India</span>

        <span className={styles.svalue}>
          &nbsp;&nbsp;455
          <img src={up} alt="profit" className={styles.icons}></img>
        </span>
        <img src={green} alt="line" className={styles.lines}></img>
      </div>
      <div className={`card col ${styles.border}`}>
        <span className={styles.stag}>&nbsp;&nbsp;Thailand</span>

        <span className={styles.svalue}>
          &nbsp;&nbsp;455
          <img src={down} alt="profit" className={styles.icons}></img>
        </span>
        <img src={red} alt="line" className={styles.rlines}></img>
      </div>
      <div className={`card col ${styles.border}`}>
        <span className={styles.stag}>&nbsp;&nbsp;Philippines</span>
        <span className={styles.svalue}>
          &nbsp;&nbsp;455
          <img src={up} alt="profit" className={styles.icons}></img>
        </span>
        <img src={green} alt="line" className={styles.lines}></img>
      </div>
      <div className={`card col ${styles.border}`}>
        <span className={styles.stag}>&nbsp;&nbsp;Singapore</span>

        <span className={styles.svalue}>
          &nbsp;&nbsp;455
          <img src={down} alt="profit" className={styles.icons}></img>
        </span>
        <img src={red} alt="line" className={styles.rlines}></img>
      </div>
      <div className={`card col ${styles.rborder}`}>
        <span className={styles.stag}>&nbsp;&nbsp;HongKong</span>

        <span className={styles.svalue}>
          &nbsp;&nbsp;455
          <img src={up} alt="profit" className={styles.icons}></img>
        </span>
        <img src={green} alt="line" className={styles.lines}></img>
      </div>
    </div>
  );
};

export default CountryChart;
