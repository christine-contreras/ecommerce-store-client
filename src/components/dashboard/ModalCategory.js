import React from 'react'
import { Modal } from '@mui/material'
import FormCategory from './FormCategory'

const ModalCategory = ({ openModal, closeModal, category }) => {
  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={closeModal}
      aria-labelledby='edit-modal'
      aria-describedby='edit-modal'>
      <FormCategory closeModal={closeModal} category={category} />
    </Modal>
  )
}

export default ModalCategory
