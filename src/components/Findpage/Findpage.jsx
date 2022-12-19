import React, {Component, useEffect, useState} from 'react';
import axios from "axios";

const Findpage = () => {
    const [Data, setData] = useState([])

    const [Name, setName] = useState("")
    const getSer = () => {
        const url = 'http://localhost:8000/serial/name/' + Name
        console.log(url)
        axios.get(url)
            .then(response => {
                const result = response.data
                const {status, message, data} = result
                if (status !== 'SUCCESS') {
                    alert(message, status)
                } else {
                    setData(data)
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }



    return <div>
        <div>
            Введите название сериала:
            <input onChange={(e) => setName(e.target.value)}></input>
            <button onClick={() => {
                getSer('1')
            }}>Найти
            </button>
        </div>
        <div>
            Название сериала:
            <label> {Data.name}</label>
        </div>
        <div>
            Год выхода:
            <label> {Data.year}</label>
        </div>
        <div>
            Количество сезонов:
            <label> {Data.totalSeasons}</label>
        </div>
        <div>
            Количество серий:
            <label> {Data.totalSeries}</label>
        </div>
    </div>
}

export default Findpage;