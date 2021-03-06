import React from 'react'
import ProductPlaceHolder from '../../style/images/product-placeholder.jpg'
import { Grid } from '@mui/material'
import { useRecoilValue, useRecoilState } from 'recoil'
import {
  selectedOptionIndexAtom,
  selectedProductAtom,
  selectedProductOptionsAtom,
} from '../../atoms/atoms'

const PDPImages = () => {
  const { title } = useRecoilValue(selectedProductAtom)
  const options = useRecoilValue(selectedProductOptionsAtom)
  const [selectedOption, setSelectedOption] = useRecoilState(
    selectedOptionIndexAtom
  )

  const handleChangeOption = (number) => {
    setSelectedOption(number)
  }

  return (
    <Grid item container xs={12} md={5} lg={6} spacing={2}>
      <Grid item container flexDirection='column' xs={2}>
        {options?.map((option, index) => (
          <Grid
            item
            key={`${title} ${option?.color} image`}
            onClick={() => handleChangeOption(index)}>
            <img
              src={option?.image_url ?? ProductPlaceHolder}
              alt={`${title} ${option?.color}`}
              title={`${title} ${option?.color}`}
              className={
                index === selectedOption
                  ? 'img-responsive selected'
                  : 'img-responsive'
              }
            />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={10}>
        <img
          src={options[selectedOption]?.image_url ?? ProductPlaceHolder}
          alt={`${title} ${options[selectedOption]?.color}`}
          title={`${title} ${options[selectedOption]?.color}`}
          className='img-responsive'
        />
      </Grid>
    </Grid>
  )
}

export default PDPImages
