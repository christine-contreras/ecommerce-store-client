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
    <>
      {!isAdmin ? (
        <Menu
          anchorEl={moreAnchorEl}
          id='menu-options'
          keepMounted
          open={isMenuOpen}
          onClose={handleMenuClose}>
          <MenuItem onClick={() => navigate(`/profile/my-info`)}>
            Profile
          </MenuItem>
          <MenuItem onClick={() => navigate(`/profile/my-orders`)}>
            My Orders
          </MenuItem>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={moreAnchorEl}
          id='menu-options'
          keepMounted
          open={isMenuOpen}
          onClose={handleMenuClose}>
          <MenuItem onClick={() => navigate(`/admin-dashboard/products`)}>
            Dashboard
          </MenuItem>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      )}
    </>
  )
}
export default UserDropdownMenu
