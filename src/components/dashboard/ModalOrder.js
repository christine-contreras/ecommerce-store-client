import React from 'react'
import '../../style/css/modal.css'
import { Modal } from '@mui/material'
import FormOrder from './FormOrder'
const ModalOrder = ({ openModal, closeModal, order }) => {
  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={closeModal}
      aria-labelledby='edit-modal'
      aria-describedby='edit-modal'>
      <FormOrder order={order} />
    </Modal>
  )
}

export default ModalOrder
