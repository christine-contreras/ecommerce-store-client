import React from 'react'
import { Breadcrumbs, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useRecoilValue } from 'recoil'
import {
  selectedCategoryAtom,
  selectedCategoryProductsCountAtom,
} from '../../atoms/atoms'
const CategoryNav = () => {
  const count = useRecoilValue(selectedCategoryProductsCountAtom)
  const { name } = useRecoilValue(selectedCategoryAtom)
  return (
    <Breadcrumbs
      separator={<ArrowCircleRightOutlinedIcon fontSize='small' />}
      aria-label='breadcrumbs'>
      <Link to='/'>Home</Link>
      <Typography sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
        {name}
      </Typography>
      <Typography>
        {count} {count === 1 ? 'Product' : 'Products'}
      </Typography>
    </Breadcrumbs>
  )
}

export default CategoryNav
