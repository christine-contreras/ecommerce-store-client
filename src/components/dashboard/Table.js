import React from 'react'
import { Grid } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
const Table = ({ rows, columns }) => {
  return (
    <Grid
      item
      container
      sx={{ height: '100%', width: '100%', minHeight: 600 }}
      xs={12}>
      <Grid item flexGrow={1}>
        <DataGrid rows={rows} columns={columns} />
      </Grid>
    </Grid>
  )
}

export default Table
