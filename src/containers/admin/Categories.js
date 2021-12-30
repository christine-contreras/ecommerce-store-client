import * as React from 'react'
import { Grid, Button } from '@mui/material'
import { useRecoilState } from 'recoil'
import { categoriesAtom } from '../../atoms/atoms'
import { DataGrid } from '@mui/x-data-grid'
import TableActions from '../../components/dashboard/TableActions'
const Categories = () => {
  const [categories, setCategories] = useRecoilState(categoriesAtom)
  console.log(categories)
  const columns = [
    { field: 'id', headerName: 'ID #', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'product_slotted', headerName: 'Products Slotted', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    {
      field: 'actions',
      headerName: 'Action',
      width: 300,
      renderCell: (params) => <TableActions item='Category' />,
    },
  ]

  const rows = [
    { id: 1, name: 'Hello' },
    { id: 2, name: 'DataGridPro' },
    { id: 3, name: 'MUI' },
  ]

  return (
    <Grid item container flexDirection='column' wrap='nowrap' spacing={3}>
      <Grid item textAlign='right' xs={12}>
        <Button variant='outlined' className='btn' color='info'>
          Add Category
        </Button>
      </Grid>

      <Grid
        item
        container
        sx={{ height: '100%', width: '100%', minHeight: 300 }}
        xs={12}>
        <Grid item flexGrow={1}>
          <DataGrid rows={rows} columns={columns} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Categories
