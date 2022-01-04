import * as React from 'react'
import { Grid, Button, Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteModal from '../DeleteModal'
import ModalProduct from './ModalProduct'
import { productsAtom } from '../../atoms/atoms'
import { useRecoilState } from 'recoil'

const TableActionsProduct = ({ product }) => {
  const [products, setProducts] = useRecoilState(productsAtom)
  //handle edit modal
  const [openEditModal, setOpenEditModal] = React.useState(false)
  const handleOpenEditModel = () => setOpenEditModal(true)
  const handleCloseEditModel = () => setOpenEditModal(false)

  //handle delete modal
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false)
  const handleOpenDeleteModel = () => setOpenDeleteModal(true)
  const handleCloseDeleteModel = () => setOpenDeleteModal(false)

  const handleDeleteProduct = () => {
    fetch(`/api/products/${product.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          const newProductList = products.filter((p) => p.id !== product.id)
          setProducts(newProductList)
          handleCloseDeleteModel()
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

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
      </Grid>

      <DeleteModal
        openModal={openDeleteModal}
        closeModal={handleCloseDeleteModel}
        handleDelete={handleDeleteProduct}
        item='Product'
        warningMessage={`Are you sure you want to delete ${product.name}? All Skus for this product will be deleted.`}
      />

      {/* edit category modal */}
      <ModalProduct
        openModal={openEditModal}
        closeModal={handleCloseEditModel}
        product={product}
      />
    </>
  )
}

export default TableActionsProduct
