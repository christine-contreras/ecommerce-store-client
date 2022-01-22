import React from 'react'
import { Grid, Typography } from '@mui/material'
import OrderPreview from '../../components/order/OrderPreview'
import { userOrdersAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'
const MyOrders = () => {
  const orders = useRecoilValue(userOrdersAtom)
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
      <Grid item container spacing={4} flexDirection='column'>
        {[...orders]
          ?.sort((a, b) => a.id - b.id)
          .map((order) => (
            <Grid item key={`my-order-${order.id}`}>
              <OrderPreview order={order} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  )
}

export default MyOrders
