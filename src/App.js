import "./styles/style.css";
import Home from "./pages/home.jsx";
import WriteConfession from "./pages/writeconfession.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import api from './api/axiosConfig'
import { useEffect, useState } from 'react';

function App() {

  const [confessions, setConfessions] = useState();

  const getConfessions = async () => {
      try {
          const response = await api.get('confess/getter');
          setConfessions(response.data)
      }
      catch(err) {
          console.log(err)
      }
  }

  useEffect(() => {
      getConfessions();
      }, [])

  return (
    
    <Router>
      <Routes>
          <Route path="/" element={<Home confessions = {confessions}/>}/>
          <Route exact path="/writeconfession" element={<WriteConfession/>}/>
      </Routes>
    </Router>
  );
}

export default App;
