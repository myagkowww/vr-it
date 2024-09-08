import React, {useEffect} from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Avtovysota from "./pages/cases/Avtovysota";
import Motoclub from "./pages/cases/Motoclub";
import Prokrasivoe from "./pages/cases/Prokrasivoe";
import Tklimat from "./pages/cases/Tklimat";
import AboutCompany from "./pages/AboutCompany";
import Header from "./components/header/Header";

function App() {
    useEffect(() => {
        window.scroll(0, 0);
    })
  return (
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/case-avtovysota" element={<Avtovysota/>}/>
            <Route path="/case-motoclub" element={<Motoclub/>}/>
            <Route path="/case-prokrasivoe" element={<Prokrasivoe/>}/>
            <Route path="/case-tklimat" element={<Tklimat/>}/>
            <Route path="/about" element={<AboutCompany/>}/>

          </Routes>

        </Router>
      </div>
  );
}

export default App;
