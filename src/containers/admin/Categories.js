import * as React from 'react'
import { Grid, Button } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { categoriesAtom } from '../../atoms/atoms'
import TableActionsCategory from '../../components/dashboard/TableActionsCategory'
import ModalCategory from '../../components/dashboard/ModalCategory'
import Table from '../../components/dashboard/Table'

const Categories = () => {
  const categories = useRecoilValue(categoriesAtom)
  console.log(categories)

  //handle category create modal
  const [openCategoryModal, setOpenCategoryModal] = React.useState(false)
  const handleOpenCreateCategoryModel = () => setOpenCategoryModal(true)
  const handleCloseCreateCategoryModel = () => setOpenCategoryModal(false)

  const columns = [
    { field: 'id', headerName: 'Category #', width: 150 },
    { field: 'name', headerName: 'Category Name', width: 300 },
    { field: 'products_slotted', headerName: 'Products Slotted', width: 150 },
    { field: 'isActive', headerName: 'Is Active?', width: 150 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 300,
      renderCell: (params) => <TableActionsCategory category={params.row} />,
    },
  ]

  return (
    <Grid item container flexDirection='column' wrap='nowrap' spacing={3}>
      <Grid item textAlign='right' xs={12}>
        <Button
          variant='contained'
          className='btn b-radius'
          color='info'
          onClick={handleOpenCreateCategoryModel}>
          Add A Category
        </Button>
      </Grid>

      <Table rows={categories} columns={columns} />

      {/* create category modal */}
      <ModalCategory
        openModal={openCategoryModal}
        closeModal={handleCloseCreateCategoryModel}
      />
    </Grid>
  )
}

export default Categories
