import * as React from 'react'
import { Grid, Button } from '@mui/material'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { productsAtom, selectedProductAtom } from '../../atoms/atoms'
import ModalProduct from '../../components/dashboard/ModalProduct'
import Table from '../../components/dashboard/Table'
import TableActionsProduct from '../../components/dashboard/TableActionsProduct'

const Products = () => {
  const [products, setProducts] = useRecoilState(productsAtom)
  const selectedProduct = useResetRecoilState(selectedProductAtom)

  React.useEffect(() => {
    // fetch all products
    handleFetchProducts()
  }, [])

  const handleFetchProducts = () => {
    fetch('/api/products').then((response) => {
      if (response.ok) {
        response.json().then((products) => {
          setProducts(products.sort((a, b) => a.id - b.id))
        })
      } else {
        response.json().then((err) => console.log(err))
      }
    })
  }

  //handle product create modal
  const [openProductModal, setOpenProductModal] = React.useState(false)
  const handleOpenCreateProductModel = () => {
    selectedProduct()
    setOpenProductModal(true)
  }
  const handleCloseCreateProductModel = () => setOpenProductModal(false)

  const columns = [
    { field: 'id', headerName: 'Product #', width: 100 },
    { field: 'title', headerName: 'Product', width: 250 },
    { field: 'quantity', headerName: '# Of SKUs', width: 125 },
    { field: 'isActive', headerName: 'Is Active?', width: 125 },
    { field: 'isSlotted', headerName: 'Is Slotted?', width: 125 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 300,
      renderCell: (params) => <TableActionsProduct product={params.row} />,
    },
  ]

  return (
    <Grid item container flexDirection='column' wrap='nowrap' spacing={3}>
      <Grid item textAlign='right' xs={12}>
        <Button
          variant='contained'
          className='btn b-radius'
          color='info'
          onClick={handleOpenCreateProductModel}>
          Add A Product
        </Button>
      </Grid>

      <Table rows={products} columns={columns} />

      {/* create category modal */}
      <ModalProduct
        openModal={openProductModal}
        closeModal={handleCloseCreateProductModel}
      />
    </Grid>
  )
}

export default Products
