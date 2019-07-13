import React from 'react';
import Modal from 'react-modal';

const TeamsModals = (props) => (
  <Modal
    isOpen={!!props.show}
    onRequestClose={props.handleClose}
    closeTimeoutMS={200}
  >
  </Modal>
);

export default TeamsModals;