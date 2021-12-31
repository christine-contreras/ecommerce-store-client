import * as React from 'react'
import { Grid, Button, Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteModal from '../DeleteModal'
import { categoriesAtom } from '../../atoms/atoms'
import { useRecoilState } from 'recoil'

const TableActionsCategory = ({ category }) => {
  const [categories, setCategories] = useRecoilState(categoriesAtom)
  //handle edit modal
  const [openEditModal, setOpenEditModal] = React.useState(false)
  const handleOpenEditModel = () => setOpenEditModal(true)
  const handleCloseEditModel = () => setOpenEditModal(false)

  //handle delete modal
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false)
  const handleOpenDeleteModel = () => setOpenDeleteModal(true)
  const handleCloseDeleteModel = () => setOpenDeleteModal(false)

  const handleDeleteCategory = () => {
    fetch(`/api/categories/${category.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          const newCategoryList = categories.filter((c) => c.id !== category.id)
          setCategories(newCategoryList)
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
          <Button variant='outlined' className='btn b-radius' color='info'>
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Tooltip title='Delete Category'>
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
        handleDelete={handleDeleteCategory}
        item='Category'
        warningMessage={`Are you sure you want to delete the ${category.name} category? All Products slotted to this category will be removed.`}
      />
    </>
  )
}

export default TableActionsCategory
