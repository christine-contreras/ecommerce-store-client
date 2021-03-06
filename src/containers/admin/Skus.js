import * as React from 'react'
import { Grid, Button, Typography } from '@mui/material'
import Table from '../../components/dashboard/Table'
import TableActionsSku from '../../components/dashboard/TableActionsSku'
import ModalSku from '../../components/dashboard/ModalSku'
import {
  selectedProductSkusAtom,
  productsAtom,
  selectedProductAtom,
} from '../../atoms/atoms'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
const Skus = () => {
  const skus = useRecoilValue(selectedProductSkusAtom)
  const setProducts = useSetRecoilState(productsAtom)
  const [product, setProduct] = useRecoilState(selectedProductAtom)
  //handle sku create modal
  const [openSkuModal, setOpenSkuModal] = React.useState(false)
  const handleOpenCreateSkuModal = () => setOpenSkuModal(true)
  const handleCloseCreateSkuModal = () => setOpenSkuModal(false)

  const updateProductListNewSkus = (newSkusList) => {
    const updatedproduct = {
      ...product,
      skus: newSkusList,
      quantity: newSkusList.length,
      isActive: newSkusList.length === 0 ? 'inactive' : 'active',
    }
    setProduct(updatedproduct)
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedproduct.id ? updatedproduct : p))
    )
  }

  const columns = [
    { field: 'id', headerName: 'Sku #', width: 125 },
    { field: 'color', headerName: 'Color', width: 125 },
    { field: 'size', headerName: 'Size', width: 125 },
    { field: 'price', headerName: 'Price', width: 125 },
    { field: 'quantity', headerName: 'Quantity', width: 125 },
    { field: 'hasImage?', headerName: 'Image', width: 125 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 300,
      renderCell: (params) => (
        <TableActionsSku
          sku={params.row}
          updateProducts={updateProductListNewSkus}
        />
      ),
    },
  ]

  return (
    <Grid
      item
      container
      flexDirection='column'
      wrap='nowrap'
      spacing={3}
      xs={12}>
      <Grid
        item
        container
        spacing={2}
        sx={{ justifyContent: { sm: 'space-between' } }}>
        <Grid item xs={12} sm='auto'>
          <Typography component='h1' variant='h5' align='center' paddingTop>
            Product SKUs
          </Typography>
        </Grid>
        <Grid item container xs={12} sm='auto' justifyContent='center'>
          <Grid item sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Button
              variant='contained'
              className='btn b-radius'
              color='info'
              onClick={handleOpenCreateSkuModal}>
              Add A SKU
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Table rows={skus} columns={columns} />

      {/* create sku form */}
      <ModalSku
        openModal={openSkuModal}
        closeModal={handleCloseCreateSkuModal}
        updateProducts={updateProductListNewSkus}
      />
    </Grid>
  )
}

export default Skus
