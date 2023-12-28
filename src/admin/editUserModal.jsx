import React, { useState } from 'react';
import Modal from 'react-modal';

const EditUserModal = ({ user, isOpen, onClose, onSave }) => {
    const [editedUser, setEditedUser] = useState({
        _id: user._id,
        email: user.email,
        name: user.name || '',
        role: user.role || '',
    });

    const handleSave = () => {
        onSave(editedUser);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Edit User Modal"
            className="modal-dialog modal-dialog-centered"
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit User</h5>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={editedUser.name}
                                onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={editedUser.email}
                                onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Role:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={editedUser.role}
                                onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value })}
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

export default EditUserModal;
