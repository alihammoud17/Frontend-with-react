import React, { useState } from 'react';
import { validateName, errorName } from '../shared/validators';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Modal, ModalHeader, 
    ModalBody, Label, Col, Row } from 'reactstrap';

const CommentFormComponent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleComment = values => {
        toggleModal();
        console.log("Current State: " + JSON.stringify(values));
        alert("Current State: " + JSON.stringify(values));
    }

    return (
        <React.Fragment>
            <Button outline onClick={toggleModal}>
                <span className="fa fa-comments fa-lg"/>
                &nbsp;Submit Comment
            </Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>handleComment(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12}>Rating</Label>
                            <Col md={12}>
                                <Control.select model=".rating" id="rating" 
                                name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".author" id="author"
                                name="author" className="form-control"
                                placeholder="Your Name" 
                                validators={validateName} />
                                <Errors className="text-danger" model=".author" 
                                show="touched" messages={errorName} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}>Your Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" id="comment"
                                name="comment" className="form-control" rows="12"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
                
            </Modal>
        </React.Fragment>
    )
}

export default CommentFormComponent
