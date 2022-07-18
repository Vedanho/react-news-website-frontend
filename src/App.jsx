import { Route, Routes } from "react-router-dom"
import styles from './App.css';
import Regist from "./components/Regist/Regist";
import Adminpage from "./pages/Adminpage/Adminpage";
import Authpage from "./pages/Authorization/Authpage";
import Categorypage from "./pages/CategoryPage/Categorypage";
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
        <Route path="/category/:id" element={<Categorypage />} />
        <Route path="/admin/page" element={<Adminpage/>} />
     </Routes>
    </div>
  );
}

export default App;
