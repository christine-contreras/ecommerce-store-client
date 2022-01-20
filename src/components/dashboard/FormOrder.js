import * as React from 'react'
import {
  Typography,
  Grid,
  Alert,
  Stack,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import OrderPreview from '../order/OrderPreview'
import { useRecoilState } from 'recoil'
import { ordersAtom } from '../../atoms/atoms'
import { changeDate } from '../../helpers'
const FormOrder = ({ order }) => {
  const statusOptions = [
    'Pending',
    'Processing',
    'Shipped',
    'Completed',
    'Cancelled',
  ]

  const [orders, setOrders] = useRecoilState(ordersAtom)
  const [loading, setLoading] = React.useState(false)
  const [updated, setUpdated] = React.useState(false)
  const [errors, setErrors] = React.useState([])
  const [status, setStatus] = React.useState(statusOptions[0])

  React.useEffect(() => {
    order && setStatus(order?.status)
  }, [order])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])
    setLoading(true)
    setUpdated(false)

    fetch(`/api/orders/${order.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        status,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const newOrder = { ...data, created_at: changeDate(order.created_at) }
        const newOrdersList = [...orders].map((o) =>
          o.id === newOrder.id ? newOrder : o
        )
        setOrders(newOrdersList)
        setLoading(false)
        setUpdated(true)
      })
      .catch((err) => {
        setLoading(false)
        setErrors(err.errors)
      })
  }

  return (
    <Grid
      container
      flexDirection='column'
      wrap='nowrap'
      className='modal-body
       b-radius-sm'
      spacing={2}>
      <Grid item>
        <Typography
          component='h1'
          variant='h4'
          align='center'
          paddingTop
          paddingBottom>
          Update Order
        </Typography>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Grid
          container
          flexDirection='column'
          wrap='nowrap'
          spacing={2}
          sx={{ pt: 2 }}>
          <Grid item xs={12} textAlign='center'>
            <FormControl
              color='info'
              variant='outlined'
              fullWidth
              sx={{ maxWidth: 300 }}>
              <InputLabel id='status-options'>Status</InputLabel>
              <Select
                label='Status'
                labelId='status-options'
                onChange={(e) => setStatus(e.target.value)}
                value={status}>
                {statusOptions.map((status) => (
                  <MenuItem value={status} key={`status-option-${status}`}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <OrderPreview order={order} />
          </Grid>

          <Grid item textAlign='center'>
            <Button
              type='submit'
              variant='contained'
              className='btn btn-lg'
              color='info'>
              Update Status
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item>
        <Stack sx={{ width: '100%' }} spacing={2}>
          {errors.map((error) => (
            <Alert severity='error' key={error} variant='filled'>
              {error}
            </Alert>
          ))}
          {loading && (
            <Alert severity='info' variant='filled'>
              Editing Order ... Do Not Refresh Page
            </Alert>
          )}

          {updated && (
            <Alert severity='success' variant='filled'>
              Order Updated
            </Alert>
          )}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default FormOrder
