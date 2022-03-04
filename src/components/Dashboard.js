import React from "react";
import styles from "./Dashboard.module.css";
import up from "../pictures/triangle.png";
import down from "../pictures/down.png";
import coin from "../pictures/coin.png";
import euro from "../pictures/euro.png";
import pound from "../pictures/pounds.png";
import CountryChart from "./CountryChart";
import TeamMembers from "./TeamMembers";
import CountryComparision from "./CountryComparision";
const Dashboard = (props) => {
  return (
    <div className={styles.grid}>
      <div className={styles.leftbar}>
        <div className={`card ${styles.spacing}`}>
          <h6 className={`card-title text-center ${styles.titles}`}>
            Dashboard
          </h6>
          <img
            src="https://img.icons8.com/ios/50/000000/dashboard.png"
            alt="dashboard"
            className={`${styles.image}`}
          />
        </div>
      </div>
      <div className={styles.mainbar}>
        <div className="container">
          <h5 className={styles.header}>Dashboard</h5>
          <p>Welcome back, {props.user}</p>
          <div class="container">
            <div class="row">
              <div class={`col ${styles.right}`}>
                <span className={styles.tag}>Balance</span>
                <br />
                <span className={styles.value}>5999.99$</span>
              </div>
              <div class={`col ${styles.right}`}>
                <span className={styles.tag}>Profits</span>
                <br />
                <span className={styles.value}>$678</span>
                <img src={up} alt="profit" className={styles.icons}></img>&nbsp;
                +98%
              </div>
              <div class={`col ${styles.right}`}>
                <span className={styles.tag}>Losses</span>
                <br />
                <span className={styles.value}>$450</span>
                <img src={down} alt="profit" className={styles.icons}></img>
                &nbsp; +48%
              </div>
              <div class={`col`}>
                <span className={styles.tag}>Currencies</span>
                <br />
                <div className={styles.currencies}>
                  <img
                    src="https://img.icons8.com/ultraviolet/120/000000/bitcoin.png"
                    alt="bitcoin"
                  />
                  <img src={coin} alt="dollar" />
                  <img src={euro} alt="euro"></img>
                  <img src={pound} alt="pound"></img>
                </div>
                <br />
              </div>
              <CountryChart />
              <div className={`row`}>
                <TeamMembers />
                <CountryComparision />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
