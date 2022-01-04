import * as React from 'react'
import { Modal, Tab, Grid } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import FormProduct from './FormProduct'
import Skus from '../../containers/admin/Skus'

const ModalProduct = ({ openModal, closeModal, product }) => {
  const [tabValue, setTabValue] = React.useState('1')

  const handleTabChange = (e, newTabValue) => {
    setTabValue(newTabValue)
  }

  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={closeModal}
      aria-labelledby='edit-modal'
      aria-describedby='edit-modal'>
      <Grid
        container
        flexDirection='column'
        className='modal-body-bg b-radius-sm'
        spacing={2}>
        <Grid item>
          <TabContext value={tabValue}>
            <Grid item container flexDirection='column'>
              <Grid item>
                <TabList
                  onChange={handleTabChange}
                  aria-label='Product Tabs'
                  textColor='inherit'
                  className='tabs'>
                  <Tab label='Summary' value='1' />
                  <Tab label='SKUs' value='2' />
                  <Tab label='Categories' value='3' />
                </TabList>
              </Grid>

              <Grid item container>
                <TabPanel value='1'>
                  <FormProduct product={product} />
                </TabPanel>
                <TabPanel value='2' sx={{ width: '100%' }}>
                  <Skus product={product} />
                </TabPanel>
                <TabPanel value='3'>Item Three</TabPanel>
              </Grid>
            </Grid>
          </TabContext>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default ModalProduct
