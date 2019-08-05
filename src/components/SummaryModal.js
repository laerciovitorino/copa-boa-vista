import React from 'react';
import Modal from 'react-modal';

const SummaryModal = (props) => (
  <Modal
    isOpen={!!props.show}
    onRequestClose={props.handleClose}
    contentLabel=""
    closeTimeoutMS={200}
  >
    <div className="close-button">
      <button className="btn btn-secondary" onClick={props.handleClose}>Fechar</button>
    </div>
  </Modal>
);

export default SummaryModal;