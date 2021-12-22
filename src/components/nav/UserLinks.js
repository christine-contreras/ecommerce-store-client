import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { userAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'

import { IconButton, Badge, Button, Grid } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import LoggedIn from './LoggedIn'

const UserLinks = () => {
  const user = useRecoilValue(userAtom)
  // console.log(`user: ${user}`)

  let navigate = useNavigate()

  return (
    <>
      <Grid
        item
        container
        alignItems='center'
        justifyContent='flex-end'
        spacing={3}
        xs={4}
        sm={5}>
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

        {user ? (
          <LoggedIn />
        ) : (
          // <Grid item xs='auto'>
          //   <Button
          //     variant='text'
          //     sx={{ color: 'text.primary', marginRight: 2 }}
          //     onClick={() => navigate(`/login`)}>
          //     Log In
          //   </Button>
          // </Grid>
          <LoggedIn />
        )}
      </Grid>
    </>
  )
}

export default UserLinks
