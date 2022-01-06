import * as React from 'react'
import '../../style/css/dashboard.css'
import { Outlet } from 'react-router'
import { Grid, Container } from '@mui/material'
import { userAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'
import SideNav from '../../components/nav/SideNav'
import NoProfileMessage from '../../components/dashboard/NoProfileMessage'

const Dashboard = () => {
  const user = useRecoilValue(userAtom)

  return (
    <Container maxWidth='xl'>
      {user ? (
        <Grid container className='profile-container' justifyContent='stretch'>
          <Grid item className='profile-menu' xs={12} md={4} lg={3}>
            <SideNav />
          </Grid>

          <Grid
            item
            container
            flexDirection='column'
            spacing={3}
            xs={12}
            md={8}
            lg={9}
            sx={{ p: 4 }}>
            <Outlet />
          </Grid>
        </Grid>
      ) : (
        <NoProfileMessage />
      )}
    </Container>
  )
}

export default Dashboard
