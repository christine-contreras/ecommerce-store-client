import React from 'react'
import { Modal } from '@mui/material'
import { useLocation } from 'react-router'
import FormCategory from './FormCategory'

const FormModal = ({ openModal, closeModal, item }) => {
  let location = useLocation()
  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={closeModal}
      aria-labelledby='edit-modal'
      aria-describedby='edit-modal'>
      {location.pathname.includes('categories') && (
        <FormCategory closeModal={closeModal} category={item} />
      )}
    </Modal>
  )
}

export default FormModal
