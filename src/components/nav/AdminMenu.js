import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { MenuList, MenuItem } from '@mui/material'

const AdminMenu = () => {
  let location = useLocation()
  return (
    <MenuList className='side-menu'>
      <MenuItem
        className={
          location.pathname === '/admin-dashboard/categories' ? 'active' : null
        }>
        <Link to='/admin-dashboard/categories'>Categories</Link>
      </MenuItem>
      <MenuItem
        className={
          location.pathname === '/admin-dashboard/products' ? 'active' : null
        }>
        <Link to='/admin-dashboard/products'>Products</Link>
      </MenuItem>
      <MenuItem
        className={
          location.pathname === '/admin-dashboard/orders' ? 'active' : null
        }>
        <Link to='/admin-dashboard/orders'>Orders</Link>
      </MenuItem>
    </MenuList>
  )
}

export default AdminMenu
