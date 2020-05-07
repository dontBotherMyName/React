import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader, Label, FormGroup} from 'reactstrap';
import { LocalForm, Control, Errors} from 'react-redux-form'

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
    }
    render() {
        
        return (
            <React.Fragment>
                <button className="btn btn-outline-secondary" onClick={this.toggleModal}><span className="fa fa-pencil fa-lg" /> Submit Comments</button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" className="form-control" name="rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>    
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control" validators={{ minLength: minLength(3), maxLength: maxLength(15)}}/>
                                <Errors className="text-danger" model=".author" show="touched" messages={{
                                    minLength: 'Should at least be three characters long',
                                    maxLength: 'Should be less than or equal to 15 characters'
                                }} />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" FormGroups="6" className="form-control" />
                            </FormGroup>
                            
                            <FormGroup>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </FormGroup>
                            
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
