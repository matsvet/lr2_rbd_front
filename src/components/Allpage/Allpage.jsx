import React, {Component, useEffect, useState} from 'react';
import axios from "axios";

const Findpage = () => {
    const [Data, setData] = useState([])
    const [id, setId] = useState("")
    const getSerialData = () => {
        const url = 'http://localhost:8000/serial'
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

    const deleteSerial = () => {
        const url = 'http://localhost:8000/serial/'+id
        axios.delete(url)
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

    useEffect(() => {
        getSerialData()
    }, [])

    return <div>
        {Data.map((item) => <div>
            <div>
                Название сериала:
                <label> {item.name}</label>
            </div>
            <div>
                Год выхода:
                <label> {item.year}</label>
            </div>
            <div>
                Количество сезонов:
                <label> {item.totalSeasons}</label>
            </div>
            <div>
                Количество серий:
                <label> {item.totalSeries}</label>
            </div>
            <div>
                <button onClick={()=> {
                    setId(item._id)
                    deleteSerial()
                                    }}> Удалить</button>
            </div>
            <div>_</div>
        </div>
        )}
    </div>
}

export default Findpage;