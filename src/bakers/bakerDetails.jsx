import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AppContext } from '../context/context';

const BakerDetails = ({ baker, isOpen, onClose }) => {
  console.log(baker);
  // const[baker]=useContext(AppContext)
  const [bakerDetails, setBakerDetails] = useState({ _id: baker._id, name: baker.name || '', email: baker.email || '', likes: baker.likes.length || '', comments: baker.comments, cake_bases: baker.cake_bases, cake_decorations: baker.cake_decorations });

  const handleSave = () => {
    console.log(bakerDetails);
    // onSave(bakerDetails);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Details Baker"
      className="modal-dialog modal-dialog-centered"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Details baker</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Name:</strong> {bakerDetails.name}
          </p>
          <p>
            <strong>Email:</strong> {bakerDetails.email}
          </p>
          <p>
            <strong>Likes:</strong> {bakerDetails.likes}
          </p>
          <p>
            <strong>Comments:</strong>{' '}
            {bakerDetails.comments && bakerDetails.comments.length > 0 ? (
              bakerDetails.comments.map((comment, index) => (
                <span key={index}>{comment.comment}{index !== bakerDetails.comments.length - 1 ? ', ' : ''}</span>
              ))
            ) : (
              'No comments'
            )}
          </p>
          <p>
            <strong>Cake Bases:</strong>{' '}
            {bakerDetails.cake_bases && bakerDetails.cake_bases.length > 0 ? (
              bakerDetails.cake_bases.map((base, index) => (
                <span key={index}>{base}{index !== bakerDetails.cake_bases.length - 1 ? ', ' : ''}</span>
              ))
            ) : 'No cake bases'}
          </p>
          <p>
            <strong>Cake Decorations:</strong>{' '}
            {bakerDetails.cake_decorations && bakerDetails.cake_decorations.length > 0 ? (
              bakerDetails.cake_decorations.map((decoration, index) => (
                <span key={index}>{decoration}{index !== bakerDetails.cake_decorations.length - 1 ? ', ' : ''}</span>
              ))
            ) : 'No cake decorations'}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default BakerDetails;
