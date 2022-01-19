import React from 'react'
import { Grid, Typography, Container } from '@mui/material'
import Status from './Status'
import Shipping from './Shipping'
import ProductOrder from '../product/ProductOrder'
import { changeDate } from '../../helpers'
const OrderPreview = ({ order }) => {
  return (
    <Container
      maxWidth='sm'
      className='order'
      sx={{ background: '#fff', border: '1px solid #666', p: 5 }}>
      <Grid item container spacing={1} flexDirection='column'>
        <Grid item container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography variant='h5' component='p'>
              <strong>Order Summary</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>{changeDate(order.created_at)}</Typography>
          </Grid>
        </Grid>

        <Grid item container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Typography>
              Order Confirmation #: <strong>{order?.invoice}</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Status status={order?.status} />
          </Grid>
        </Grid>

        <Grid item sx={{ pb: 2 }}>
          <Shipping address={order?.address} />
        </Grid>

        <Grid item container flexDirection='column' spacing={2}>
          {order?.selected_items?.map((item) => (
            <ProductOrder item={item} key={`order-item-${item.id}`} />
          ))}
        </Grid>

        <Grid item alignSelf='flex-end'>
          <Typography>
            <strong>Total: ${parseInt(order?.amount)}</strong>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default OrderPreview
