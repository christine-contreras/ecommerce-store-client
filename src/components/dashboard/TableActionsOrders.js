import * as React from 'react'
import { Grid, Button } from '@mui/material'
import ModalOrder from './ModalOrder'
const TableActionsOrders = ({ order }) => {
  //handle edit modal
  const [openEditModal, setOpenEditModal] = React.useState(false)
  const handleOpenEditModel = () => setOpenEditModal(true)
  const handleCloseEditModel = () => setOpenEditModal(false)
  return (
    <>
      <Grid container alignItems='center' justifyContent='center' spacing={1}>
        <Grid item>
          <Button
            variant='outlined'
            className='btn b-radius'
            color='info'
            onClick={handleOpenEditModel}>
            Edit
          </Button>
        </Grid>
      </Grid>

      {/* edit order modal */}
      <ModalOrder
        openModal={openEditModal}
        closeModal={handleCloseEditModel}
        order={order}
      />
    </>
  )
}

export default TableActionsOrders
