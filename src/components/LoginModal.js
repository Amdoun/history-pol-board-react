import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import { withRouter } from 'react-router-dom'
import { Col, Button, Row, Container, Form } from 'react-bootstrap';

class LoginModal extends Component {

    constructor(props){
        super(props)
        this.email = React.createRef()
        this.password = React.createRef()
    }

    onLogin = () => {
        fetch('http://localhost:8080/auth/signin', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify({
                "email":this.email.current.value,
                "password":this.password.current.value,
            })
        }).then(response => response.json()).then(function(data) {
            console.log(data)
            localStorage.setItem('token',data.token)
        }).catch(e => {
            console.log(e);
        });
    }

    render(){
        return(
            <Modal open={this.props.open} onClose={this.props.closeModal()}>
                <h2>ThePoliticsBoard</h2>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <h3>Sign up now</h3>
                            <ul className="mt-4">
                                <li>Be able to take part in political discussions</li>
                                <li>Be able to vote in polls</li>
                                <li>View important historical events</li>
                                <li>Get to know the community</li>

                            </ul>
                            
                            <Button variant="info" href="/signup" style={{marginTop:'93px'}}>Sign up</Button>
                        </Col>
                        <Col>
                            <h3>Log in</h3>
                            <br/>
                            <Container fluid={true}>
                                <Form onSubmit={(e)=> {
                                    e.preventDefault();
                                    this.onLogin()
                                    
                                    setTimeout(() => this.props.history.push('/'), 500)
                                    }}>
                                    <Form.Group controlId="usernameControl">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" required ref={this.email}/>
                                        <br />
                                    </Form.Group>
                                    <Form.Group controlId="passwordControl">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" required ref={this.password}/>
                                        <br />
                                    </Form.Group>
                                    <Button type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </Container>
                        </Col>
                    </Row>
                </Container>

            </Modal>
        )
    }
}

export default withRouter(LoginModal)