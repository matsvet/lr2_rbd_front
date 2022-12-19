import React, {Component, useEffect, useState} from 'react';
import axios from "axios";

const FindpageMolod = () => {
    const [Data, setData] = useState([])

    const [id, setId] = useState("")
    const getSer = () => {
        const url = 'http://localhost:8080/product/' + id
        console.log(url)
        axios.get(url)
            .then(response => {
                const result = response.data
                if (false) {
                    alert('error')
                } else {
                    setData(result)
                    console.log(result)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }



    return <div>
        <div>
            Введите id:
            <input onChange={(e) => setId(e.target.value)}></input>
            <button onClick={() => {
                getSer()
            }}>Найти
            </button>
        </div>
        <div>
            Название продукта:
            <label> {Data.name}</label>
        </div>
        <div>
            Цена:
            <label> {Data.price}</label>
        </div>
        <div>
            Производитель
            <label> {Data.producer}</label>
        </div>
        <div>
            Страна:
            <label> {Data.country}</label>
        </div>
    </div>
}

export default FindpageMolod;