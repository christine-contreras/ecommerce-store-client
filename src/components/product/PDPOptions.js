import React from 'react'
import { Grid } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { selectedProductOptionsAtom } from '../../atoms/atoms'
const PDPOptions = () => {
  const options = useRecoilValue(selectedProductOptionsAtom)
  return <div></div>
}

export default PDPOptions
