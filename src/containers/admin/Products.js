import * as React from 'react'
import { Grid, Button } from '@mui/material'
import { useRecoilState } from 'recoil'
import { productsAtom } from '../../atoms/atoms'
import TableActionsCategory from '../../components/dashboard/TableActionsCategory'
import ProductModal from '../../components/dashboard/ProductModal'
import Table from '../../components/dashboard/Table'

const Products = () => {
  const [products, setProducts] = useRecoilState(productsAtom)
  console.log(products)

  React.useEffect(() => {
    // fetch all products
    handleFetchProducts()
  }, [])

  const handleFetchProducts = () => {
    fetch('/api/products').then((response) => {
      if (response.ok) {
        response.json().then((products) => {
          setProducts(products)
          console.log(products)
        })
      } else {
        response.json().then((err) => console.log(err))
      }
    })
  }

  //handle product create modal
  const [openProductModal, setOpenProductModal] = React.useState(false)
  const handleOpenCreateProductModel = () => setOpenProductModal(true)
  const handleCloseCreateProductModel = () => setOpenProductModal(false)

  const columns = [
    { field: 'id', headerName: 'Product #', width: 150 },
    { field: 'name', headerName: 'Product', width: 300 },
    { field: 'quantity', headerName: 'Stock', width: 150 },
    { field: 'isActive', headerName: 'Is Active?', width: 150 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 300,
      renderCell: (params) => <TableActionsCategory product={params.row} />,
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
      <ProductModal
        openModal={openProductModal}
        closeModal={handleCloseCreateProductModel}
      />
    </Grid>
  )
}

export default Products
