import React from 'react'
import '../Styles/Pages/Home.scss'
import Post from '../Components/Post'
import { Container } from '@mui/material'

function Home() {
  return (
    <Container maxWidth="sm">

    <div className='homeContain'>
      <Post/>
    </div>
    </Container>
  )
}

export default Home