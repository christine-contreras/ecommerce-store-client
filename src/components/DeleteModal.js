import React from 'react'
import '../style/css/modal.css'
import { Typography, Modal, Alert, Grid, Button } from '@mui/material'

const DeleteModal = ({
  openModal,
  closeModal,
  item,
  warningMessage,
  handleDelete,
}) => {
  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={closeModal}
      aria-labelledby='modal-delete'
      aria-describedby='modal-delete'>
      <Grid
        container
        flexDirection='column'
        className='modal-body b-radius-sm'
        spacing={2}>
        <Grid item>
          <Typography component='h1' variant='h4' align='center' paddingTop>
            Delete {item}
          </Typography>
        </Grid>
        <Grid item>
          <Alert severity='error'>{warningMessage}</Alert>
        </Grid>
        <Grid item textAlign='center'>
          <Button
            variant='outlined'
            className='btn btn-lg'
            color='error'
            onClick={handleDelete}>
            Yes, I'm Sure
          </Button>
        </Grid>
        <Grid item textAlign='center'>
          <Button
            variant='contained'
            className='btn btn-lg'
            color='info'
            onClick={closeModal}>
            Exit
          </Button>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default DeleteModal
