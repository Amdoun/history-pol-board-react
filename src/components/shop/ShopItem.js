import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

const ShopItem = (props) => (
    <Row className="mt-4">
        <Col>
            {props.merch.nom}
        </Col>
        <Col>
            {props.merch.prix}
        </Col>
        <Col>
            <Button className="mr-1" variant="success" onClick={()=>props.btnAdd(props.merch)}>
                Ajouter
            </Button>
            <Button onClick={()=>props.btnDts(props.merch)}>
                Détails
            </Button>
        </Col>
    </Row>
)

export default ShopItem;