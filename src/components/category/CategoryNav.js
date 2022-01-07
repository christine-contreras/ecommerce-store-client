import React from 'react'
import { Grid, Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
const CategoryNav = ({ productCount, name }) => {
  return (
    <Grid item>
      <Breadcrumbs
        separator={<ArrowCircleRightOutlinedIcon fontSize='small' />}
        aria-label='breadcrumbs'>
        <Link to='/'>Home</Link>
        <Typography sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography>
          {productCount} {productCount === 1 ? 'Product' : 'Products'}
        </Typography>
      </Breadcrumbs>
    </Grid>
  )
}

export default CategoryNav
