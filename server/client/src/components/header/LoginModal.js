import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login to Your Account</ModalHeader>
          <ModalBody>
               <Button className="btn btn-lg btn-block" color="danger" type="submit">
                  <FontAwesomeIcon icon={["fab","google"]} color="white" size="1x" className="mr-2"/>
                  Sign in with Google
               </Button>{' '}
               <hr/>
               <Form>
					<Input type="text" name="user" placeholder="Username"/>
					<Input type="password" name="pass" placeholder="Password"/>
              {/*<FontAwesomeIcon icon={["fab","facebook"]} color="black" size="3x"/>*/}
                    forget password
			   </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;