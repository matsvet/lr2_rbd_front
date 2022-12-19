import './App.css';
import React, { Component }  from 'react';
import Homepage from "./components/Homepage/Homepage";
import {Route, Routes} from "react-router-dom";
import Addpage from "./components/Addpage/Addpage";
import Findpage from "./components/Findpage/Findpage";
import Allpage from "./components/Allpage/Allpage";
import MolodPage from "./components/Molodpage/MolodPage";
import FindpageMolod from "./components/Molodpage/FindpageMolod";

function App() {
  return (
    <div className="App">
        Маркет Плэйс
        <Homepage/>
        <div className='appWrapperContent'>
        <Routes>
            {/*<Route path='/' element={<Homepage/>}/>*/}
            <Route path='/addserial' element={<Addpage/>}/>
            <Route path='/findserial' element={<Findpage/>}/>
            <Route path='/allserials' element={<Allpage/>}/>
            <Route path='/molod' element={<MolodPage/>}/>
            <Route path='/findmolod' element={<FindpageMolod/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
