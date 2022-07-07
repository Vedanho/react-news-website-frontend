import { Route, Routes } from "react-router-dom"
import './App.css';
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Homepage />} />
     </Routes>
    </div>
  );
}

export default App;
