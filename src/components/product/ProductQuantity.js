import * as React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
const ProductQuantity = ({ max }) => {
  const [quantity, setQuantity] = React.useState(1)
  const [quantityOptions, setquantityOptions] = React.useState([1])

  React.useEffect(() => {
    if (max) {
      setquantityOptions(createArray)
    }
  }, [max])

  const createArray = () => {
    return Array(10 - 1 + 1)
      .fill()
      .map((_, idx) => 1 + idx)
  }

  return (
    <FormControl color='info' fullWidth>
      <InputLabel id='quantity-options'>QTY</InputLabel>
      <Select
        label='QTY'
        labelId='quantity-options'
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        value={quantity}>
        {quantityOptions.map((option) => (
          <MenuItem value={option} key={`quanity-option-${option}`}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default ProductQuantity
