import { Route, Routes } from "react-router-dom"
import styles from './App.css';
import Homepage from "./pages/Homepage/Homepage";
import Newspage from "./pages/Newspage/Newspage";

function App() {
  return (
    <div className={styles.App}>
     <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/new/:id" element= {<Newspage />}></Route>
     </Routes>
    </div>
  );
}

export default App;
