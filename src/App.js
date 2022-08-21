import "./App.css";
import Login from "./pages/Login/Login";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const [user, setUser] = useState({ name: "", age: "" });

  const handleName = () => {
    setUser((prev) => ({ ...prev, name: input }));
  };

  return (
    <div className="App">
      <Login />

      <input
        placeholder="set name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleName}>change user</button>
      <p>{user.name}</p>
    </div>
  );
}

export default App;
