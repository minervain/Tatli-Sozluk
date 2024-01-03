import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

import '../Styles/Components/flow.scss';

function FlowDetail() {
    const { strCategory } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
            .then((res) => {
                setData(res.data.meals || []); // Ensure res.data.meals is not null
            })
            .catch((error) => {
                console.error('err=', error);
            });
    }, [strCategory]);

    console.log(data);

    return (
        <div className='flowDetay'>
            {data && data.length > 0 ? (
                data.map((ctg) => (
                    <Link to={`/flowDetay/strCategory/${ctg.idMeal}`} key={ctg.idMeal}>
                        <div>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={ctg.strMealThumb}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {ctg.strMeal}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Link>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default FlowDetail;
