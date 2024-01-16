import React from 'react';
import { useParams } from 'react-router-dom';
import useDataFetch from '../../hooks/useDataFetch';
import { Avatar } from '@mui/material';
import '../../Styles/Pages/userdetails.scss'

function UserDetail() {
  const { id } = useParams();
  const { data } = useDataFetch(`/posts/${id}`);

  // Check if data.user exists and has the expected structure
  if (!data || !data.user || typeof data.user !== 'object') {
    return <div>Loading...</div>;
  }

  const { id: userId, username } = data.user;

  return (
    <div className='userInfoContainer'>
      <div className='userInfo'>
        <div>
          <Avatar sx={{ bgcolor: 'darkblue' }} aria-label='recipe'></Avatar>
        </div>
        <div>
          <h1>{username}</h1>
        </div>
      </div>

      <div className='userInfoPost'>
        <h1>Atılan Postlar</h1>
        
        {userId}</div>
    </div>
  );
}

export default UserDetail;
