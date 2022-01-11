import * as React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useRecoilState } from 'recoil'
import { plpFilterSelectorAtom } from '../../atoms/atoms'
const CategoryFilter = () => {
  const filterOptions = ['View All', 'Price: Low To High', 'Price: High To Low']
  const [filter, setFilter] = useRecoilState(plpFilterSelectorAtom)
  return (
    <FormControl fullWidth color='info'>
      <InputLabel id='filter-select-label'>Sort By:</InputLabel>
      <Select
        labelId='filter-select-label'
        id='filter-select-label'
        value={filter}
        label='Sort By:'
        onChange={(e) => setFilter(e.target.value)}>
        {filterOptions.map((option) => (
          <MenuItem value={option} key={`category-filter-option-${option}`}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
export default CategoryFilter
