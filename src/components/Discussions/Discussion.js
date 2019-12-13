import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Discussion extends Component {
    
    render(){
        return(
            <div onClick={() => {this.props.history.push("/discussion/"+this.props.disc.discussionid)}} className="discussion-single p-3 mt-3">
                <Row className="vertical-align">
                    <Col md='4'>
                    <Image
                            className="mr-2"
                            width={64}
                            height={64}
                            src="https://us.123rf.com/450wm/pikepicture/pikepicture1612/pikepicture161200526/68824651-homme-d%C3%A9faut-placeholder-avatar-profil-gris-image-isol%C3%A9-sur-fond-blanc-pour-votre-conception-vector-illu.jpg?ver=6"
                            roundedCircle/>
                        {this.props.disc.launcher.name}
                    </Col>
                    <Col md="4" className="mt-3">   
                        {this.props.disc.launching}
                    </Col>
                    <Col className="mt-3">
                        {this.props.disc.date.replace('T'," ").substring(0,19)}
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default withRouter(Discussion);