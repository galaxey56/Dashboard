import React from 'react'
import man from "../pictures/man.png";
import woman from "../pictures/woman.png";
import styles from "./Dashboard.module.css";
const TeamMembers = () => {
  return (
    <div className={`col`}>
                  <br />
                  <div className={`container ${styles.team}`}>
                    <div className={styles.starter}>
                      <h6 className={styles.header}>
                        Team Members&nbsp;&nbsp;
                      </h6>
                      <button className={styles.expand}>View all</button>
                    </div>
                    <div className={`card ${styles.member}`}>
                      <img src={man} alt="manpic" className={styles.pfp}></img>
                      <p className={styles.memName}>Gilburt turty</p>
                      <p className={styles.role}>Leader</p>
                    </div>
                    <div className={`card ${styles.member}`}>
                      <img
                        src={woman}
                        alt="manpic"
                        className={styles.pfp}
                      ></img>
                      <p className={styles.memName}>Peggy Alexandria</p>
                      <p
                        className={styles.role}
                        style={{ color: "blue", backgroundColor: "lightblue" }}
                      >
                        Manager
                      </p>
                    </div>
                    <div className={`card ${styles.member}`}>
                      <img src={man} alt="manpic" className={styles.pfp}></img>
                      <p className={styles.memName}>John Alexander</p>
                      <p className={styles.role}>Member</p>
                    </div>
                    <div className={`card ${styles.member}`}>
                      <img
                        src={woman}
                        alt="manpic"
                        className={styles.pfp}
                      ></img>
                      <p className={styles.memName}>Shizukha Nobi</p>
                      <p
                        className={styles.role}
                        style={{ color: "blue", backgroundColor: "lightblue" }}
                      >
                        Member
                      </p>
                    </div>
                  </div>
                </div>
  )
}

export default TeamMembers