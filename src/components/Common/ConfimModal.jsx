import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_OPEN } from 'utilities/constants';
const ConfimModal = (props) => {
  const { title, content, show, onAction } = props;
  return (
    <>
      <Modal show={show} onHide={() => onAction(MODAL_ACTION_CLOSE)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onAction(MODAL_ACTION_CLOSE)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onAction(MODAL_ACTION_OPEN)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfimModal;
