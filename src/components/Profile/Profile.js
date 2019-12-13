import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './profile.css'

class Profile extends Component {
    render(){
        return(
            <Container>
                <Row className="mt-4"> 
                    <Col md="5">
                        <Image
                            className="mr-2 profile-image"
                            width={128}
                            height={128}
                            src="https://us.123rf.com/450wm/pikepicture/pikepicture1612/pikepicture161200526/68824651-homme-d%C3%A9faut-placeholder-avatar-profil-gris-image-isol%C3%A9-sur-fond-blanc-pour-votre-conception-vector-illu.jpg?ver=6"
                            roundedCircle/>
                        <br/>
                        <div className="mt-3">
                            <b>Username : </b>
                            <br/>
                            <b>Posts : </b>
                            <br/>
                            <b>Location : </b>
                            <br/>
                            <b>Personal quote : </b>
                        </div>
                        
                    </Col>
                    
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile