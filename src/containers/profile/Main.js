import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useLocation } from 'react-router'
import MyInfo from './MyInfo'
import MyShipping from './MyShipping'
import MyOrders from './MyOrders'
import Categories from '../admin/Categories'
import Products from '../admin/Products'
import Orders from '../admin/Orders'
const Main = ({ title }) => {
  let location = useLocation()
  return (
    <>
      <Grid item>
        <Typography component='h1' variant='h4' align='center' paddingTop>
          {title}
        </Typography>
      </Grid>

      {location.pathname.includes('my-info') && <MyInfo />}
      {location.pathname.includes('my-shipping') && <MyShipping />}
      {location.pathname.includes('profile/my-orders') && <MyOrders />}
      {location.pathname.includes('categories') && <Categories />}
      {location.pathname.includes('products') && <Products />}
      {location.pathname.includes('admin-dashboard/orders') && <Orders />}
    </>
  )
}

export default Main
