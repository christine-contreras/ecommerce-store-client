import React from 'react'
import { MenuList, MenuItem, Typography } from '@mui/material'

const Social = () => {
  const social = ['Instagram', 'Facebook', 'TikTok']
  return (
    <MenuList className='menu'>
      <Typography variant='subtitle2' component='p'>
        Social
      </Typography>
      {social.map((page) => (
        <MenuItem key={`footer-social-item-${page}`}>{page}</MenuItem>
      ))}
    </MenuList>
  )
}

export default Social
