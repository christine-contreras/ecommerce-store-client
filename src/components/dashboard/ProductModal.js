import * as React from 'react'
import { Modal, Tab, Grid } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import ProductTabs from '../../containers/admin/ProductTabs'

const ProductModal = ({ openModal, closeModal, product }) => {
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
        sx={{ top: '40%' }}
        spacing={2}>
        <Grid item>
          <TabContext value={tabValue}>
            <Grid item container flexDirection='column'>
              <Grid item>
                <TabList onChange={handleTabChange} aria-label='Product Tabs'>
                  <Tab label='Summary' value='1' />
                  <Tab label='SKUs' value='2' />
                  <Tab label='Categories' value='3' />
                </TabList>
              </Grid>

              <Grid item>
                <TabPanel value='1'>Item One</TabPanel>
                <TabPanel value='2'>Item Two</TabPanel>
                <TabPanel value='3'>Item Three</TabPanel>
              </Grid>
            </Grid>
          </TabContext>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default ProductModal
