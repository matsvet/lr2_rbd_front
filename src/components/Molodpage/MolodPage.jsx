import React, {Component, useEffect, useState} from 'react';
import axios from "axios";

const MolodPage = () => {
    // let Data = []
    const [Data, setData] = useState([])
    const [id, setId] = useState("")
    const getSerialData = () => {
        const url = 'http://localhost:8080/all'
        axios.get(url)
            .then(response => {
                const result = response.data
                console.log(response)

                if (false) {
                    alert(response.status)
                } else {
                    setData(response.data)
                    // Data = response.data
                    console.log(Data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteProduct = () => {
        const url = 'http://localhost:8080/prod/1'
        console.log(url)
        axios.delete(url)
            .then(response => {

                const result = response.data
                if (false) {
                    alert(result.status)
                } else {
                    alert("удалено")
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
                    Название продукта:
                    <label> {item.name}</label>
                </div>
                <div>
                    Цена:
                    <label> {item.price}</label>
                </div>
                <div>
                    Производитель
                    <label> {item.producer}</label>
                </div>
                <div>
                    Страна:
                    <label> {item.country}</label>
                </div>
                <div>
                    <button onClick={() => {
                        console.log(item.id)
                        setId(item.id)
                        deleteProduct()
                    }}> Удалить
                    </button>
                </div>
                <div>_</div>
            </div>
        )}
    </div>
}

export default MolodPage;