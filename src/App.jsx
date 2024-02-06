import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import profile from "./assets/profile.png";
import RouteTest from "./components/RouteTest";

function App() {
  return (
    <div className={styles.App}>
      hello world!
      <Outlet />
      <br />
      <RouteTest />
      <img src={profile} alt="Profile" />
    </div>
  );
}

export default App;
