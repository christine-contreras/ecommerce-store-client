import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { userAtom, adminAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'

import { IconButton, Badge, Button, Grid } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import LoggedInMenu from './LoggedInMenu'

const UserLinks = ({ onLogout }) => {
  const user = useRecoilValue(userAtom)
  const isAdmin = useRecoilValue(adminAtom)

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
            <IconButton size='large' aria-label='cart' color='inherit'>
              <Badge
                badgeContent={1}
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
