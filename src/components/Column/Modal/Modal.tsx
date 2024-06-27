// Modal.js
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, handleClose, handleSave }:any) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const onSave = () => {
    handleSave(title, description);
    setTitle('');
    setDescription('');
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>Add Todo</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={onSave}>Save</button>
        <button onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
