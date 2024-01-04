import React from 'react'
import '../../Styles/Pages/Home.scss'
import Post from '../../Components/Post.js'
import { Container } from '@mui/material'
import Drawer from '../../Components/Drawer/Drawer.js'

function Home() {
  return (
    <div className='Page'>
    <Drawer/>
      <Container maxWidth="sm">
        <div className='homeContain'>
          <Post />
        </div>
      </Container>
    </div>
  )
}

export default Home