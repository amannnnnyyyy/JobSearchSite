import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/Add';
import Modal from './Modal';

function AddEmployee() {
    const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <IconButton aria-label="fingerprint" color="secondary" onClick={handleOpenModal}>
        <ShoppingCartIcon/>
        <h6>Add</h6>
      </IconButton>
      {showModal && <Modal onClose={handleCloseModal} onSubmit={(data: any) => console.log(data)} children={undefined} />}
    </div>
  )
}

export default AddEmployee
