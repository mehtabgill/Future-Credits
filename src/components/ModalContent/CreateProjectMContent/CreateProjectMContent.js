import React from 'react';
import {Form, Col, Row} from 'react-bootstrap' ;


const CreateProjectMContent = (props) => {

    return (
        <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Title:
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={props.title} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Desc:
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={props.description} />
                </Col>
            </Form.Group>
        </Form>

    );
}

export default CreateProjectMContent ; 