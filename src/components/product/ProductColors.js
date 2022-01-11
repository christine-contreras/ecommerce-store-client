import React from 'react'
import { Grid, Radio } from '@mui/material'
const ProductColors = ({ productOptions, option, setOption }) => {
  return (
    <Grid container item spacing={1}>
      {productOptions.map((item, index) => (
        <Radio
          checked={option === index}
          onChange={(e) => setOption(e.target.value)}
          value={index}
          name='radio-buttons'
          className={item.color}
          inputProps={{ 'aria-label': item.color }}
        />
      ))}
    </Grid>
  )
}

export default ProductColors
