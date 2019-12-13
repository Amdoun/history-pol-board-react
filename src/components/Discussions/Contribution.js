import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

class Contribution extends Component {
    render(){
        return(
            <div className="contribution-single p-3 mt-3">
                <Row>
                    <Col>
                    <b>{this.props.cont.contributor.name + " " + this.props.cont.contributor.family} : </b>
                {this.props.cont.text}
                    </Col>
                    <Col md="4">
                        {this.props.cont.date.replace('T'," ").substring(0,19)}
                    </Col>
                </Row>
                
                
            </div>
        )
    }
}

export default Contribution