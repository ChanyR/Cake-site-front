import React, { useState } from 'react';
import Modal from 'react-modal';

const EditBakerModal = ({ baker, isOpen, onClose, onSave }) => {
  const [editedBaker, setEditedBaker] = useState({ _id: baker._id, name: baker.name || '', email: baker.email || '', likes: baker.likes || '', });

  const handleSave = () => {
    console.log(editedBaker);
    onSave(editedBaker);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Baker Modal"
      className="modal-dialog modal-dialog-centered"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Baker</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                value={editedBaker.name}
                onChange={(e) => setEditedBaker({ ...editedBaker, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={editedBaker.email}
                onChange={(e) => setEditedBaker({ ...editedBaker, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Likes:</label>
              <input
                type="text"
                className="form-control"
                value={editedBaker.likes}
                onChange={(e) => setEditedBaker({ ...editedBaker, likes: e.target.value })}
              />
            </div>
            <div className="text-end">
              <button type="button" className="btn btn-primary me-2" onClick={handleSave}>
                Save
              </button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditBakerModal;
