import React, {useState} from 'react' ;
import {Modal, Button} from 'react-bootstrap' ;

const VerticalModal = (props) => {

  const [enableApplyBTN, setenableApplyBTN] = useState(true);

  const callBackFunction = (childData) => {
    setenableApplyBTN(childData);
  }

    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" disabled={enableApplyBTN}>Apply</Button>
        <Button onClick={props.onHide} variant="secondary" >Close</Button>
      </Modal.Footer>
    </Modal>
    );
}

export default VerticalModal ;