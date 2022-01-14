import React from 'react'
import { Typography } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { selectedProductAtom } from '../../atoms/atoms'

const PDPDescription = () => {
  const { description } = useRecoilValue(selectedProductAtom)
  return (
    <>
      <Typography variant='subtitle1' gutterBottom>
        Description
      </Typography>
      <Typography gutterBottom>{description}</Typography>
    </>
  )
}

export default PDPDescription
