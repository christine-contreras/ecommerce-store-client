import React from 'react'
import { userAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'

import { IconButton, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import UserDropdownMenu from './UserDropdownMenu'

const LoggedInMenu = () => {
  const user = useRecoilValue(userAtom)
  // console.log(`user: ${user}`)

  //user menu to see more options
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(moreAnchorEl)
  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }

  return (
    <>
      <Grid
        item
        container
        xs='auto'
        spacing={1}
        alignItems='center'
        justifyContent='center'>
        <Grid item container xs='auto' alignItems='center' spacing={1}>
          <Grid item xs='auto'>
            <PersonOutlineOutlinedIcon />
          </Grid>
          <Grid item xs='auto' sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography>Christine</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='show menu'
            aria-controls='menu-options'
            aria-haspopup='true'
            onClick={handleMenuOpen}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Grid>
      </Grid>

      <UserDropdownMenu
        moreAnchorEl={moreAnchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </>
  )
}

export default LoggedInMenu
