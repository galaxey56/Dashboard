import styles from "./Login.module.css";
import { useState } from "react";
const Login = (props) => {
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); 
  const errorClass = error ? styles.error : null;
  const submitHandler = (event) => {
    event.preventDefault();
    if (!error) {
      props.changeName(username);
      props.logFunc(true);
    }
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
    if (password.length < 6) setError(true);
    else if(password.length >= 6)setError(false);
  };
  const UserHandler = (event) => {
    setUsername(event.target.value);
  };
  console.log(error);
  return (
    <div className={`card ${styles.changes}`}>  
      <h2 className={`card-title text-center ${styles.header}`}>Login</h2>
      <form onSubmit={submitHandler}>
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
        ></input>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
      {error && (
        <div>
          <ul>
            <li>Password must atleast contain 6 characters</li>
            <li>UserName cannot be empty</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Login;
