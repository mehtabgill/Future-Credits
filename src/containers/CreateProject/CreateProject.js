import React, {Component, ReactDOM} from 'react';
import classes from './CreateProject.css';
import Form from 'react-bootstrap/Form' ;
import {Row, Col, Button } from 'react-bootstrap';
import VerticalModal from '../../components/UI/Modal/Modal';
import CreateProjectMContent from '../../components/ModalContent/CreateProjectMContent/CreateProjectMContent';

class CreateProject extends Component{
    constructor(props){
        super(props);
        this.inputTitleRef = React.createRef();
        this.inputDescRef = React.createRef() ;
    }

    state= { 
        title: "",
        description: "",
        inputDescDisable: true,
        btnSubmitDisable: true,
        showModal: false
    }

    componentDidMount(){
        this.inputTitleRef.current.focus() ;
    }
    
    titleInputChangeHandler = (event) => {
        if(event.target.value.length >= 1){
            this.setState({
                inputDescDisable: false,
                title: this.inputTitleRef.current.value
            });
        }
    }

    descInputChangeHandler = (event) => {
        if(event.target.value.length >= 10){
            this.setState({
                btnSubmitDisable: false,
                description: this.inputDescRef.current.value
            });
        }
        else {
            this.setState({
                btnSubmitDisable: true
            });
        }
    }

    submitBtnClickHandler = () => {
        this.setState({
            showModal: true
        });
    }

    render(){
        return(
            <div className={classes.Project}>
                <h1 style={{"marginBottom":"40px"}}>Create Project Post:</h1>
                <Form style={{"marginLeft":"10px"}}>
                    <Form.Group as={Row} controlId="inputProjectTitle">
                        <Col sm="8">
                            <Form.Control type="text" size="lg" placeholder="Title" ref={this.inputTitleRef} onChange={this.titleInputChangeHandler}></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as= {Row} controlId="inputProjectDescription">
                        <Col sm="8">
                            <Form.Control as="textarea" type="text" size="lg" rows= "7" placeholder="Description" disabled={this.state.inputDescDisable}
                                onChange={this.descInputChangeHandler} ref = {this.inputDescRef}></Form.Control>
                        </Col>
                        <Form.Text className="text-muted">
                            Minimum Length 10.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" disabled={this.state.btnSubmitDisable} onClick={this.submitBtnClickHandler}>
                        Submit
                    </Button>
                </Form>
                <VerticalModal
                    show= {this.state.showModal}
                    onHide= { () => {this.setState({showModal: false})} }
                    title = {'Submit the Post?'}>
                        <CreateProjectMContent
                        title= {this.state.title}
                        description= {this.state.description} />
                </VerticalModal> 
            </div>

        );
    }
}

export default CreateProject ;