import "./App.css";
import { useSelector } from "react-redux";
import UserCard from "./components/UserCard";

function App() {
  const users = useSelector((state) => state);
  console.log("Users", users);
  return (
    <div className="App">
      <h1>Hello!</h1>
      <UserCard />
    </div>
  );
}

export default App;
