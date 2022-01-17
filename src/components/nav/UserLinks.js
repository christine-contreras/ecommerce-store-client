import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  userAtom,
  adminAtom,
  cartAtom,
  toggleCartOpenAtom,
} from '../../atoms/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { IconButton, Badge, Button, Grid } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import LoggedInMenu from './LoggedInMenu'

const UserLinks = ({ onLogout }) => {
  const user = useRecoilValue(userAtom)
  const isAdmin = useRecoilValue(adminAtom)
  const { item_count } = useRecoilValue(cartAtom)
  const setToggleCart = useSetRecoilState(toggleCartOpenAtom)

  let navigate = useNavigate()

  return (
    <>
      <Grid
        item
        container
        alignItems='center'
        justifyContent='flex-end'
        flexWrap='nowrap'
        spacing={3}
        xs={4}
        md={5}>
        {!isAdmin && (
          <Grid item xs='auto'>
            <IconButton
              size='large'
              aria-label='cart'
              color='inherit'
              onClick={setToggleCart}>
              <Badge
                badgeContent={item_count}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: 'primary.dark',
                    color: 'secondary.main',
                  },
                }}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Grid>
        )}

        {user ? (
          <LoggedInMenu onLogout={onLogout} />
        ) : (
          <Grid item xs='auto'>
            <Button
              variant='text'
              sx={{ color: 'text.primary', marginRight: 2 }}
              onClick={() => navigate(`/login`)}>
              Log In
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default UserLinks
