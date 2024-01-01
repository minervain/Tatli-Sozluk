import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import '../Styles/Components/card.scss';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommentForm from './Comment/CommentForm';
import { Collapse } from '@mui/material';
import Comment from './Comment/Comment';

export default function RecipeReviewCard({ post }) {

  
  const [kalp, setKalp] = useState(false);
     const [expanded, setExpanded] = useState(false);
     const [liked, setLiked] = useState(false);
     const [error, setError] = useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [isLiked, setIsLiked] = useState(false);
     const isInitialMount = React.useRef(true);
     const [likeId, setLikeId] = useState(null);
     const [commentList, setCommentList] = useState([]);


  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate(`/userdetay/${post.userId}`);
  };

  const handleLikeClick = () => {
    setKalp(!kalp);
  };
  const handleExpandClick = () => {   
    setExpanded(!expanded);
    refreshComments();
  };
  const refreshComments = () => {
    fetch("/comments?postId="+post.postId)
    .then(res => res.json())
    .then(
        (result) => {
            setIsLoaded(true);
            setCommentList(result)
        },
        (error) => {
            console.log(error)
            setIsLoaded(true);
            setError(error);
        }
    )
  }

  return (
      <div className='cardContain'>
        <Card  className='card'>
          <CardHeader onClick={handleAvatarClick}
            avatar={
                <Avatar sx={{ bgcolor: red[200] }} aria-label="recipe" >
                  {post.userName.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={post.title}
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
          <Collapse in={expanded} timeout="auto" unmountOnExit>
                   
                    <Container fixed className =" {classes.container}">
                    {error? "error" :
                    isLoaded? commentList.map(comment => (
                      <Comment userId = {1} userName = {"USER"} text = {comment.text}></Comment>
                    )) : "Loading"}
                    <CommentForm  userId = {1} userName = {"USER"} postId = {post.postId}></CommentForm>
                    </Container>
                </Collapse>
        </Card>
      </div>
  );
}
