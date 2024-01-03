import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/Components/flow.scss';

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
                <h1>Yemek Adı :</h1>
                <h3>Tarif</h3>
                <p>qwewqesdaaaaaaaaaaaaaaaaaaaaaqwewqesdaaaaaaaaaaaaa
                    aaaaaaaaqwqwewqesdaaaaaaaaaaaaaaaaaaaaaqwewqesdaaaaaaaaaaaaaaaaaaaaaqwewqesdaaaaaaaaaaaaaaaaa
                    aaaaqwewqesdaaaaaaaaaaaaaaaaaaaaaqwewqesdaaaaaaaaaaaaaaaaaaaaaqwewqesdaaaaaaaaaaaaaaaaaaaaaqwewqesdaaaaaaa
                    aaaaaaaaaaaaaaewqesdaaaaaaaaaaaaaaaaaaaaaqwewqesdaaaaaaaaaaaaaaaaaaaaaqwewqesdaaaaaaaaaaa
                    aaaaaaaaaaqwewqesdaaaaaaaaaaaaaaaaaaaaaqwewqesdaaaaaaaaaaaaaaaaaaaaa</p>
                    <h3>Kaynaklar</h3>
            </div>

        </div>
    )
}

export default FlowDetayTarif