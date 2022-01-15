import React from 'react'
import { Grid, Radio, FormControlLabel, RadioGroup } from '@mui/material'
const ProductSizes = ({ options, option, setOption }) => {
  return (
    <Grid item container spacing={1}>
      <Grid item>
        <RadioGroup
          className='size-option-container'
          aria-label='size'
          defaultValue={option}
          name='radio-group-sizes'>
          {options.map((item, index) => (
            <FormControlLabel
              key={`product-size-option-${item.size}`}
              onClick={(e) => setOption(e.target.value)}
              value={index}
              label={item.size}
              control={<Radio />}
              className={
                index === parseInt(option)
                  ? 'size-option selected'
                  : 'size-option'
              }
            />
          ))}
        </RadioGroup>
      </Grid>
    </Grid>
  )
}

export default ProductSizes
