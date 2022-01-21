import * as React from 'react'
import { Grid, Typography } from '@mui/material'
import { cartAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'
import ProgressBar from './ProgressBar'
const CartShippingGoal = () => {
  const cart = useRecoilValue(cartAtom)
  const [amountLeft, setAmountLeft] = React.useState(100)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    if (cart) {
      const cartProgress = 100 - parseInt(cart.total)
      setAmountLeft(cartProgress)
      setProgress(cartProgress >= 100 ? 0 : parseInt(cart.total))
    }
  }, [cart])

  return (
    <Grid item container flexDirection='column' wrap='nowrap' sx={{ p: 2 }}>
      <Grid item xs='auto' textAlign='center'>
        {amountLeft <= 0 ? (
          <Typography>
            You qualify for <strong>Free Shipping</strong>!
          </Typography>
        ) : (
          <Typography>
            You're <strong>${amountLeft}</strong> away from{' '}
            <strong>Free Shipping</strong>
          </Typography>
        )}
      </Grid>
      <Grid item xs='auto'>
        <ProgressBar value={progress} />
      </Grid>
    </Grid>
  )
}

export default CartShippingGoal
