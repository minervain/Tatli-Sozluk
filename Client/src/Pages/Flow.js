import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../Styles/Components/flow.scss';

function Flow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => {
        setData(res.data.categories);
      })
      .catch((error) => {
        console.error('err=', error);
      });
  }, []);

  console.log(data);
  return (
    <div className='flow'>
      {data.map((post) => {
        return (
          <div key={post.idCategory} className='flow'>
            <Card sx={{ maxWidth: 345 }} className='flowContainer'>
              <CardMedia
                sx={{
                  height: 160,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                image={post.strCategoryThumb}
                title='Yemek'
                className='flowimage'
              />
              <CardContent className='flowContent' sx={{ overflow: 'auto' }}>
                <Typography gutterBottom variant='h5' component='div'>
                  {post.strCategory}
                </Typography>
            
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Flow;
