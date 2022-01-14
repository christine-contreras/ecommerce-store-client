import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useRecoilValue } from 'recoil'
import {
  selectedOptionIndexAtom,
  selectedProductAtom,
  selectedProductOptionsAtom,
} from '../../atoms/atoms'

const PDPTitle = () => {
  const { title } = useRecoilValue(selectedProductAtom)
  const options = useRecoilValue(selectedProductOptionsAtom)
  const selectedOption = useRecoilValue(selectedOptionIndexAtom)
  return (
    <>
      <Grid item>
        <Typography variant='h4' component='h1'>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h5' component='p' className='price'>
          $ {parseInt(options[selectedOption].price)}
        </Typography>
      </Grid>
    </>
  )
}

export default PDPTitle
