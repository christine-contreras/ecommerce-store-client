import React from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../style/images/free-spirit-logo.png'
const Logo = () => {
  return (
    <Grid item xs={4} sm={2} textAlign='center'>
      <Link to='/' className='link-img'>
        <img
          className='logo'
          src={logo}
          alt='Free Spirit Designs'
          title='Free Spirit Designs'
        />
      </Link>
    </Grid>
  )
}

export default Logo
