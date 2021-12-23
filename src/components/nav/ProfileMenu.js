import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { MenuList, MenuItem } from '@mui/material'

const ProfileMenu = () => {
  let location = useLocation()
  return (
    <MenuList className='side-menu'>
      <MenuItem
        className={location.pathname === '/profile/my-info' ? 'active' : null}>
        <Link to='/profile/my-info'>My Profile</Link>
      </MenuItem>
      <MenuItem
        className={
          location.pathname === '/profile/my-shipping' ? 'active' : null
        }>
        <Link to='/profile/my-shipping'>My Shipping Info</Link>
      </MenuItem>
      <MenuItem
        className={
          location.pathname === '/profile/my-orders' ? 'active' : null
        }>
        <Link to='/profile/my-orders'>My Orders</Link>
      </MenuItem>
    </MenuList>
  )
}

export default ProfileMenu
