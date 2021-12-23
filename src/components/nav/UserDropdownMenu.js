import * as React from 'react'
import { Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router'
import { adminAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'

const UserDropdownMenu = ({
  moreAnchorEl,
  isMenuOpen,
  handleMenuClose,
  onLogout,
}) => {
  let navigate = useNavigate()
  const isAdmin = useRecoilValue(adminAtom)
  return (
    <Menu
      anchorEl={moreAnchorEl}
      id='menu-options'
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}>
      {!isAdmin && (
        <>
          <MenuItem onClick={() => navigate(`/user/profile`)}>Profile</MenuItem>
          <MenuItem onClick={() => navigate(`/user/orders`)}>
            My Orders
          </MenuItem>
        </>
      )}
      <MenuItem onClick={onLogout}>Logout</MenuItem>
    </Menu>
  )
}
export default UserDropdownMenu
