import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import '../Styles/Components/card.scss';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, InputAdornment, OutlinedInput } from '@mui/material';

export default function PostForm(props) {

    const userId=props.userId;

  
  const [kalp, setKalp] = useState(false);
  const [title,setTitle]=useState("")
  const [text,setText]=useState("")

  const postKaydet = async () => {
    try {
      const response = await fetch("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          userId: userId,
          text: text,
        }),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("HTTP error! Status:", response.status, "Message:", errorResponse.message);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Post kaydedildi:", data);
    } catch (error) {
      console.error("Post kaydı sırasında bir hata oluştu:", error.message);
    }
  };
//   const navigate = useNavigate();

//   const handleAvatarClick = () => {
//     navigate(`/userdetay/${post.userId}`);
//   };

  const handleLikeClick = () => {
    setKalp(!kalp);
  };
  const handleSubmit =()=>{
 postKaydet();
  }
  const handleTitle =(value)=>{
    setTitle(value);
  }
  const handleText =(value)=>{
    setText(value);
  }


  return (
    <Container maxWidth="sm">
      <div className='cardContain'>
        <Card sx={{ maxWidth: 800, backgroundColor: 'pink' }} className='card'>
          <CardHeader 
            avatar={
                <Avatar sx={{ bgcolor: red[200] }} aria-label="recipe" >
                </Avatar>
            }
            title={<OutlinedInput
            id='outlined-adorment-amount'
            multiline
            placeholder='Title'
            inputProps={{maxLength:25}}
            fullWidth
            onChange={(i)=>handleTitle(i.target.value)}
             
            
            
            >

            </OutlinedInput>}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            {<OutlinedInput
            id='outlined-adorment-amount'
            multiline
            placeholder='Yorumla '
            inputProps={{maxLength:255}}
            fullWidth
            onChange={(i)=>handleText(i.target.value)}

            endAdornment={
                <InputAdornment position='end'>
                <Button variant='contained'
                onClick={handleSubmit}>Yorum yap</Button>
                </InputAdornment>
            }
            
            
            >

            </OutlinedInput>}            </Typography>
          </CardContent>
    
        </Card>
      </div>
    </Container>
  );
}
