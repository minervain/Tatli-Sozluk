import { Avatar, Button, Card, CardContent, CardHeader, Container, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import React, { useState } from 'react';

function CommentForm({ userId, postId, onClose }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = () => {
    if (commentText.trim() === '') {
      return;
    }
                         


    const commentData = {
      userId: userId, 
      postId: postId, 
      text: commentText,
    };

    fetch('/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Comment submitted successfully:', data);
        onClose();
      })
      .catch(error => {
        console.error('Error submitting comment:', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <div className='cardContain'>
        <Card sx={{ maxWidth: 800, backgroundColor: 'gray' }} className='card'>
          <CardHeader 
            avatar={<Avatar aria-label="recipe" />}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <OutlinedInput
                id='outlined-adorment-amount'
                multiline
                placeholder='Yorumla '
                inputProps={{ maxLength: 255 }}
                fullWidth
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                endAdornment={
                  <InputAdornment position='end'>
                    <Button variant='contained' onClick={handleCommentSubmit}>
                      Yorum yap
                    </Button>
                  </InputAdornment>
                }
              />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

export default CommentForm;
