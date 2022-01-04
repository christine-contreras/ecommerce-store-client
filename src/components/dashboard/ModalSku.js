import * as React from 'react'
import '../../style/css/modal.css'
import { Modal } from '@mui/material'
import FormSku from './FormSku'

const ModalSku = ({ openModal, closeModal, sku, product, updateProducts }) => {
  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={closeModal}
      aria-labelledby='edit-modal'
      aria-describedby='edit-modal'>
      <FormSku
        closeModal={closeModal}
        sku={sku}
        product={product}
        updateProducts={updateProducts}
      />
    </Modal>
  )
}

export default ModalSku
