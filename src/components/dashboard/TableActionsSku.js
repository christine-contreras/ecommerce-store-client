import * as React from 'react'
import { Grid, Button, Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteModal from '../DeleteModal'
import ModalSku from './ModalSku'
import { selectedProductSkusAtom } from '../../atoms/atoms'
import { useRecoilValue } from 'recoil'

const TableActionsSku = ({ sku, updateProducts }) => {
  const skus = useRecoilValue(selectedProductSkusAtom)

  //handle edit modal
  const [openEditModal, setOpenEditModal] = React.useState(false)
  const handleOpenEditModel = () => setOpenEditModal(true)
  const handleCloseEditModel = () => setOpenEditModal(false)

  //handle delete modal
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false)
  const handleOpenDeleteModel = () => setOpenDeleteModal(true)
  const handleCloseDeleteModel = () => setOpenDeleteModal(false)

  const handleDeleteSku = () => {
    fetch(`/api/skus/${sku.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          const newSkusList = skus.filter((s) => s.id !== sku.id)
          updateProducts(newSkusList)
          handleCloseDeleteModel()
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
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
      <Grid item>
        <Tooltip title='Delete Product'>
          <IconButton
            aria-label='delete'
            color='error'
            onClick={handleOpenDeleteModel}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>

      <DeleteModal
        openModal={openDeleteModal}
        closeModal={handleCloseDeleteModel}
        handleDelete={handleDeleteSku}
        item='Sku'
        warningMessage={`Are you sure you want to delete this sku?`}
      />

      {/* edit category modal */}
      <ModalSku
        openModal={openEditModal}
        closeModal={handleCloseEditModel}
        sku={sku}
        updateProducts={updateProducts}
      />
    </Grid>
  )
}

export default TableActionsSku
