import React from 'react'
import '../style/css/home.css'
import { Container } from '@mui/material'
import Hero from '../components/home/Hero'
const Home = () => {
  return (
    <>
      <Container maxWidth='xl'>
        <Hero />
      </Container>
    </>
  )
}

export default Home
