import React from 'react'
import { Grid, Button, Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const TableActions = ({ item }) => {
  return (
    <Grid container alignItems='center' justifyContent='center' spacing={1}>
      <Grid item>
        <Button variant='outlined' className='btn btn-radius' color='info'>
          Edit
        </Button>
      </Grid>
      <Grid item>
        <Tooltip title={`Delete ${item}`}>
          <IconButton aria-label='delete' color='error'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}

export default TableActions
