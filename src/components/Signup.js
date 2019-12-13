import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap';

class Signup extends Component {

    constructor(props){
        super(props)
        this.name = React.createRef()
        this.family = React.createRef()
        this.location = React.createRef()
        this.ideology = React.createRef()
        this.quote = React.createRef()
        this.email = React.createRef()
        this.password = React.createRef()
    }

    signUp = () => {
        fetch('http://localhost:8080/member', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify({
                "name":this.name.current.value,
                "family":this.family.current.value,
                "country":this.location.current.value,
                "ideology":this.ideology.current.value,
                "quote":this.quote.current.value,
                "email":this.email.current.value,
                "password":this.password.current.value,
                "roles":["ROLE_USER"]
            })
        }).then(response => response.json()).then(function(data) {
            console.log(data)
        }).catch(e => {
            console.log(e);
        });
    }

    render(){
        return(
            <Container className="mt-3">
                <h1>Welcome</h1>
                <h3>Please fill in the sign up form</h3>
                <br/>
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    this.signUp()
                    this.props.history.push("/")
                }}>
                    <Form.Group controlId="nameControl">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required ref={this.name}/>
                        <br />
                    </Form.Group>
                    <Form.Group controlId="familyControl">
                        <Form.Label>Family</Form.Label>
                        <Form.Control type="text" required ref={this.family}/>
                        <br />
                    </Form.Group>
                    <Form.Group controlId="locationControl">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" required ref={this.location}/>
                        <br />
                    </Form.Group>
                    <Form.Group controlId="ideologyControl">
                        <Form.Label>Ideology</Form.Label>
                        <Form.Control type="text" required ref={this.ideology}/>
                        <br />
                    </Form.Group>
                    <Form.Group controlId="quoteControl">
                        <Form.Label>Quote</Form.Label>
                        <Form.Control type="text" required ref={this.quote}/>
                        <br />
                    </Form.Group>
                    <Form.Group controlId="emailControl">
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control type="email" required ref={this.email}/>
                        <br />
                    </Form.Group>
                    <Form.Group controlId="passwordControl">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required ref={this.password}/>
                        <br />
                    </Form.Group>
                    <Button  variant="info" type="submit">
                        Signup
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default withRouter(Signup)