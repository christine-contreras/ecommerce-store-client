import * as React from 'react'
import '../../style/css/modal.css'
import { Modal } from '@mui/material'
import FormSku from './FormSku'

const ModalSku = ({ openModal, closeModal, sku, updateProducts }) => {
  return (
    <>
      <Modal
        key='modal-sku'
        className='modal'
        open={openModal}
        onClose={closeModal}
        aria-labelledby='edit-modal'
        aria-describedby='edit-modal'>
        <FormSku
          closeModal={closeModal}
          sku={sku}
          updateProducts={updateProducts}
        />
      </Modal>
    </>
  )
}

export default ModalSku
