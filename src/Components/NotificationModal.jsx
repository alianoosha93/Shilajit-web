// src/components/NotificationModal.js
import React from 'react';
import Modal from 'react-modal';

const NotificationModal = ({ isOpen, onRequestClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          borderRadius: '10px',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          border: 'none',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <h2 className="text-lg font-bold">Notification</h2>
      <p>{message}</p>
      <button onClick={onRequestClose} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
        Close
      </button>
    </Modal>
  );
};

export default NotificationModal;
