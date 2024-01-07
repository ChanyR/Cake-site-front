import React from 'react';
import Button from '@mui/material/Button';

const Modal = ({ imageURL, onClose }) => {
  return (
    <div className="modal-overlay" data-aos="fade-up"  data-aos-anchor-placement="center-center"   data-aos-duration="2000">
      <div className="modal-content" style={{ maxWidth: '70vh', maxHeight: '70vh', display: 'flex', alignItems:'center' }}>
      <Button variant="outlined" className="modal-close " onClick={onClose}>
      Close
    </Button>
        <img src={imageURL} alt="Generated Image" style={{ maxWidth: '50vh', maxHeight: '50vh', display: 'flex', alignItems:'center' }} />
      </div>
    </div>
  );
};

export default Modal;
