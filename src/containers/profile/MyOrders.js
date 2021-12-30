import React from 'react'
import { Grid, Typography } from '@mui/material'
import Order from '../../components/dashboard/Order'
import { userOrdersAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'
const MyOrders = () => {
  const orders = useRecoilValue(userOrdersAtom)
  console.log(orders)

  return (
    <Grid container flexDirection='column' sx={{ pt: 3 }}>
      {orders.length === 0 && (
        <Grid item>
          <Typography variant='subtitle1' align='center'>
            No Orders
          </Typography>
          <Typography component='p' align='center'>
            If you made an order and don't see if here, please contact customer
            service.
          </Typography>
        </Grid>
      )}
      {orders.map((order) => (
        <Order key={`order-${order.id}`} order={order} />
      ))}
    </Grid>
  )
}

export default MyOrders
