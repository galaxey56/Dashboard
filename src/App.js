import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
function App() {
  const [isLogged, changeLog] = useState(false);
  const [name,setName] = useState("");
  const getName = (name) => {
    setName(name)
  }
  return (
    <div className="App">{!isLogged && <Login logFunc={changeLog} changeName = {getName} />}
    {isLogged && <Dashboard user={name} />}
    </div>
  );
}

export default App;
