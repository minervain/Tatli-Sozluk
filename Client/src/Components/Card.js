import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import '../Styles/Components/card.scss';
import image from '../assets/st.jpg';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecipeReviewCard({ post }) {

  
  const [kalp, setKalp] = useState(false);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate(`/userdetay/${post.userId}`);
  };

  const handleLikeClick = () => {
    setKalp(!kalp);
  };

  return (
    <Container maxWidth="sm">
      <div className='cardContain'>
        <Card sx={{ maxWidth: 345, backgroundColor: 'pink' }} className='card'>
          <CardHeader onClick={handleAvatarClick}
            avatar={
                <Avatar sx={{ bgcolor: red[200] }} aria-label="recipe" >
                  {post.userName.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={post.userName}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              onClick={handleLikeClick}
              style={{ color: kalp ? 'red' : 'gray' }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <CommentIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
}
