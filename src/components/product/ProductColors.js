import React from 'react'
import { Grid, Radio } from '@mui/material'
const ProductColors = ({ options, option, setOption, product }) => {
  return (
    <Grid container item spacing={1}>
      {options.map((item, index) => (
        <Radio
          key={`${product}-color-option-${item.color}`}
          checked={parseInt(option) === index}
          onClick={(e) => setOption(e.target.value)}
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
