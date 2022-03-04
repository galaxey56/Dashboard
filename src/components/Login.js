import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const errorClass = error ? styles.error : null;
  const submitHandler = (event) => {
    event.preventDefault();
    if (!email.includes("@")) setError(true);
    if(password.trim.length < 6)setError(true);
    if(username.trim.length === 0)setError(true);
    if(!error){
        props.logFunc(true)
        props.changeName(username);
    }
  };
  const passwordHandler = event => {
    setPassword(event.target.value)
  }
  const UserHandler = event => {
    setUsername(event.target.value)
  }
  return (
    <div className={`card ${styles.changes}`}>
      <h2 className={`card-title text-center ${styles.header}`}>Login</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Email Address: </label>
        <input
          type="text"
          className={`${errorClass} form-control `}
          id="username"
          onChange={emailHandler}
          required
        ></input>
        <label htmlFor="user">UserName: </label>
        <input
          type="text"
          className={`${errorClass} form-control `}
          id="user"
          onChange={UserHandler}
          required
        ></input>
        <label htmlFor="pass">Password: </label>
        <input
          type="password"
          className={`${errorClass} form-control `}
          id="pass"
          onChange={passwordHandler}
          required
        ></input><br/>
        <button className="btn btn-primary">Submit</button>
      </form>
      {error && (
        <div>
          <ul>
            <li>Email must include "@"</li>
            <li>Password must atleast contain 6 characters</li>
            <li>UserName cannot be empty</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Login;
