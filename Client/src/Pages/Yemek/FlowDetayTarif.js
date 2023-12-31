import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../Styles/Components/flow.scss';

function FlowDetayTarif() {

    const { id } = useParams();
    const [data, setData] = useState([])
    console.log(id)

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => {
                setData(res.data.meals[0])
            })
            .catch((error) => {
                console.error('error', error)
            })
    }, [id])
    console.log(data)
    console.log(data.strMeal)
    return (
        <div className='tarifContain'>
            <div className='imageDetay'>
                <img src={data.strMealThumb}></img>
            </div>
            <div className='yemekAdi'>
                <h1>Yemek Adı : {data.strMeal}</h1>
                <h3>Tarif</h3>
                <iframe
                    title="YouTube Video"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/watch?v=6vxVgVubRPw"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <h3>Kaynaklar</h3>
            </div>

        </div>
    )
}

export default FlowDetayTarif