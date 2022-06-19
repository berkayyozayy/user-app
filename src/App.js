import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const users = useSelector((state) => state);
  console.log("Users", users);
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
