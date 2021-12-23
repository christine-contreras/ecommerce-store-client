import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { MenuList, MenuItem } from '@mui/material'

const AdminMenu = () => {
  let location = useLocation()
  return (
    <MenuList className='side-menu'>
      <MenuItem
        className={location.pathname === '/profile/my-info' ? 'active' : null}>
        <Link to='/profile/my-info'>My Info</Link>
      </MenuItem>
      <MenuItem
        className={
          location.pathname === '/profile/my-bookclubs' ? 'active' : null
        }>
        <Link to='/profile/my-bookclubs'>My Book Clubs</Link>
      </MenuItem>
    </MenuList>
  )
}

export default AdminMenu
