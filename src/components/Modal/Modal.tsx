import type { ModalComponent } from './types';

import { useState } from 'react';
import ReactModal from 'react-modal';

import { Button } from '@components/Button';

import styles from './Modal.module.scss';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Modal: ModalComponent = ({ ModalTitle, ModalButtonLabel, children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button onClick={openModal} variant="primary">
        {ModalButtonLabel}
      </Button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={ModalTitle}
        overlayClassName={styles.cover}
      >
        <div className={styles.modalContent}>
          <h2>{ModalTitle}</h2>
          {children}
          <Button onClick={closeModal} variant="primary">
            close
          </Button>
        </div>
      </ReactModal>
    </div>
  );
};

export default Modal;
