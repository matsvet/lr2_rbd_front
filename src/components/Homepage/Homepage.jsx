import React, { Component }  from 'react';
import {NavLink} from "react-router-dom";
const Homepage = () => {
    return <div>
        <NavLink to='/addserial'>Добавление сериала ___</NavLink>
        <NavLink to='/findserial'>___ Поиск сериала ___</NavLink>
        <NavLink to='/allserials'>___ Показать все</NavLink>
        {/*<NavLink to='/molod'>___ Molod</NavLink>*/}
        {/*<NavLink to='/findmolod'>___ FindpageMolod</NavLink>*/}
    </div>
}

export default Homepage;