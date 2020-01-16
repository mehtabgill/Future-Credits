import React, {useState} from 'react' ;
import {Card, Button} from 'react-bootstrap';
import Modal from '../../UI/Modal/Modal';
import ProjectApplication from '../../ModalContent/ProjectApplication/ProjectApplication'
const ProjectPost = (props) => {    
    
    const [modalShow, setModalShow] = useState(false) ;

    return(
        <Card style={{width: '50rem', marginBottom: '20px'}}>
            <Card.Header as="h5">{props.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.descprtion}
                </Card.Text>
                <Button variant="primary" onClick={()=> {setModalShow(true)}}>Apply</Button>
                <Modal
                show= {modalShow}
                onHide= {() => setModalShow(false)}
                title = {'Apply to Join'}>
                    <ProjectApplication/>
                </Modal>
            </Card.Body>
        </Card>
    );

};

export default ProjectPost ;