import * as React from 'react'
import '../../style/css/modal.css'
import { Modal, Tab, Grid, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import ProductSummary from '../../containers/admin/ProductSummary'
import Skus from '../../containers/admin/Skus'
import ProductCategories from '../../containers/admin/ProductCategories'
import { useRecoilValue } from 'recoil'
import { selectedProductAtom } from '../../atoms/atoms'

const ModalProduct = ({ openModal, closeModal }) => {
  const [tabValue, setTabValue] = React.useState('1')

  const handleTabChange = (e, newTabValue) => {
    setTabValue(newTabValue)
  }

  const product = useRecoilValue(selectedProductAtom)

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
              <Grid
                item
                container
                spacing={2}
                alignItems='flex-end'
                justifyContent='space-between'>
                <Grid item xs={12} md='auto' className='flex-grow'>
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
                {product && (
                  <Grid item xs={12} md='auto'>
                    <Typography textAlign='center' sx={{ color: '#7d6b64' }}>
                      {product.title}
                    </Typography>
                  </Grid>
                )}
              </Grid>

              <Grid item container>
                <TabPanel value='1' sx={{ width: '100%' }}>
                  <ProductSummary />
                </TabPanel>
                <TabPanel value='2' sx={{ width: '100%' }}>
                  <Skus />
                </TabPanel>
                <TabPanel value='3' sx={{ width: '100%' }}>
                  <ProductCategories />
                </TabPanel>
              </Grid>
            </Grid>
          </TabContext>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default ModalProduct
