import React, {Component, useState} from 'react';
import axios from "axios";
const Addpage = () => {

    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [totalSeasons, setTotalSeasons] = useState("")
    const [totalSeries, setTotalSeries] = useState("")

    const addToDb = () => {
        const url = 'http://localhost:8000/serial/'
        const Credentials = {name, year, totalSeasons, totalSeries}
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data
                const {status, message, data} = result
                if (status !== 'SUCCESS') {
                    alert(message, status)
                } else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return <div>
        <div>
            Название сериала
            <input onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            Год выхода:
            <input onChange={(e) => setYear(e.target.value)}/>
        </div>
        <div>
            Количество сезонов:
            <input onChange={(e) => setTotalSeasons(e.target.value)}/>
        </div>
        <div>
            Количество серий:
            <input onChange={(e) => setTotalSeries(e.target.value)}/>
        </div>
        <div>
            <button onClick={()=>{
                addToDb()}}>Добавить</button>
        </div>
    </div>
}

export default Addpage;