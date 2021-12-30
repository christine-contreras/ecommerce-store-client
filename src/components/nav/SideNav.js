import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import ProfileMenu from './ProfileMenu'
import AdminMenu from './AdminMenu'
import { userAtom, adminAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'

const SideNav = () => {
  const isAdmin = useRecoilValue(adminAtom)
  const user = useRecoilValue(userAtom)
  return (
    <Paper
      sx={{ p: 4, backgroundColor: 'primary.main', height: '100%' }}
      elevation={0}>
      {user && (
        <Grid item>
          <Typography component='p' variant='h4' paddingTop>
            Hello, {user.first_name}
          </Typography>
        </Grid>
      )}

      <Grid item>{isAdmin ? <AdminMenu /> : <ProfileMenu />}</Grid>
    </Paper>
  )
}
export default SideNav
