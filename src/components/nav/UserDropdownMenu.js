import * as React from 'react'
import { Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router'
import { userAtom } from '../../atoms/atoms'
import { useSetRecoilState } from 'recoil'

const UserDropdownMenu = ({ moreAnchorEl, isMenuOpen, handleMenuClose }) => {
  let navigate = useNavigate()
  const setUser = useSetRecoilState(userAtom)

  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) setUser(null)
    })
  }

  return (
    <Menu
      anchorEl={moreAnchorEl}
      id='menu-options'
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={() => navigate(`/user/profile`)}>Profile</MenuItem>
      <MenuItem onClick={() => navigate(`/user/orders`)}>My Orders</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  )
}
export default UserDropdownMenu
