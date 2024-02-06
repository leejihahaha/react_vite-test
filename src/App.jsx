import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import profile from "./assets/profile.png";

function App() {
  return (
    <div className={styles.App}>
      hello world!
      <Outlet />
      <img src={profile} alt="Profile" />
    </div>
  );
}

export default App;
