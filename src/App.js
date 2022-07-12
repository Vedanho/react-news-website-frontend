import { Route, Routes } from "react-router-dom"
import styles from './App.css';
import Regist from "./components/Regist/Regist";
import Authpage from "./pages/Authorization/Authpage";
import Homepage from "./pages/Homepage/Homepage";
import Newspage from "./pages/Newspage/Newspage";

function App() {
  return (
    <div className={styles.App}>
     <Routes>
        <Route path='/auth' element={<Authpage />} />
        <Route path="/regist" element={<Regist />} />
        <Route path='/' element={<Homepage />} />
        <Route path="/new/:id" element= {<Newspage />} />
     </Routes>
    </div>
  );
}

export default App;
