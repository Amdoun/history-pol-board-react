import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

const PanierItem = (props) => (
    <Row className="mt-4">
        <Col>
            {props.merch.nom}
        </Col>
        <Col>
            {props.merch.prix}
        </Col>
        <Col>
            <Button className="mr-1" variant="danger" onClick={()=>props.btnRmv(props.merch)}>
                Enlever
            </Button>
        </Col>
    </Row>
)

export default PanierItem;