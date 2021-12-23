import * as React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import FormProfile from '../../components/profile/FormProfile'
import DeleteModal from '../../components/profile/DeleteModal'

import { userAtom } from '../../atoms/atoms'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router'

const MyInfo = () => {
  let navigate = useNavigate()
  const [user, setUser] = useRecoilState(userAtom)

  //handle modal
  const [openModal, setOpenModal] = React.useState(false)
  const handleOpenModel = () => setOpenModal(true)
  const handleCloseModel = () => setOpenModal(false)

  const handleDeleteProfile = () => {
    fetch(`/api/users/${user.id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        setUser(null)
        navigate('/')
      }
    })
  }

  return (
    <>
      <Grid item>
        <FormProfile />
      </Grid>
      <Grid item textAlign='right' sx={{ pt: 10 }}>
        <Button
          variant='text'
          className='btn btn-lg'
          color='error'
          onClick={handleOpenModel}>
          Delete Account
        </Button>
      </Grid>

      <DeleteModal
        openModal={openModal}
        handleCloseModel={handleCloseModel}
        handleDelete={handleDeleteProfile}
        item='Account'
        warningMessage='Are you sure you want to delete your account?'
      />
    </>
  )
}

export default MyInfo
