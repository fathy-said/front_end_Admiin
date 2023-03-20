import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import './ShopModal.css'
import IconButton from '@mui/material/IconButton'
const ShopModal = ({ open, setOpen, editData, setEditData }) => {
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="shop-modal" >
          <form action="" dir='' onSubmit={(e) => {
            e.preventDefault();
          }}>
            <IconButton aria-label="" onClick={() => {
              setOpen(false)
            }}
              className="close-modal"
            >
              <CloseIcon />
            </IconButton>
            <h5>Edit shop detail </h5>
            <div>
              <h6>name</h6>
              <input type="text" placeholder='Name ' value={editData.name} onChange={(e) => {
                setEditData({ ...editData, name: e.target.value });
              }} />
            </div>
            <div>
              <h6>Phone</h6>
              <input type="text" placeholder='Number' value={editData.phone} onChange={(e) => {
                setEditData({ ...editData, phone: e.target.value });
              }} />
            </div>
            <div>
              <h6>Address</h6>
              <input type="text" placeholder='Address' value={editData.address} onChange={(e) => {
                setEditData({ ...editData, address: e.target.value });
              }} />
            </div>
            <Button className='submit' variant="contained" type='submit'    >Submit</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default ShopModal;
