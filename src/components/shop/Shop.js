import React, {Component} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import ShopItem from './ShopItem'
import PanierItem from './PanierItem'
import Modal from 'react-responsive-modal';
import merchData from '../merch.json'

class Shop extends Component {

    constructor(props){
        super(props)
        this.state = {
            open : false,
            namesearch : "",
            merch : [],
            panier : [],
            total : 0,
            idCount : 0,
            details : {},
        }
    }

    componentDidMount(){
        this.setState({
                merch : merchData["merch"]
            }  
        )
    }

    handleSearch(e){
        this.setState({
            namesearch: e.target.value
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    handleDetails = (event) => {
        this.setState({
            details : event,
            open: true
        })
    }

    handleAdd = (event) => {
        var panier = this.state.panier.slice()
        panier = panier.concat({id:this.state.idCount,nom:event.nom,prix:event.prix})
        this.setState({
            panier: panier,
            total: this.state.total + event.prix,
            idCount: this.state.idCount + 1
        })
    }

    handleRemove = (event) => {
        var panier = this.state.panier.slice()
        panier = panier.filter((item)=>(item.id !== event.id))
        this.setState({
            panier : panier,
            total : this.state.total - event.prix
        })

    }

    render(){
        return(
            <Container>
                <Row>
                    <Col className="mt-4">
                        <h3>Marchandise</h3>
                        <Row className="mt-4">
                            <Col>Rechercher</Col>
                            <Col><input type="text" onChange={(e)=>this.handleSearch(e)}></input></Col>
                        </Row>
                        
                        

                        {this.state.merch.map(el => (
                            
                            (this.state.namesearch === "" || el.nom.toLowerCase().includes(this.state.namesearch.toLowerCase())) &&
                            <div>
                                <ShopItem merch={el} btnAdd={this.handleAdd} btnDts={this.handleDetails}/>
                            </div>
                            
                            
                        ))}
                        
                    </Col>
                    <Col className="mt-4">
                        
                        <h3>Panier</h3>
                        
                        <Row className="mt-4">
                            <Col><h4>Total : {this.state.total}DT </h4></Col>
                        </Row>

                        {this.state.panier.map(el => (
                            
                            
                            <div>
                                <PanierItem merch={el} btnRmv={this.handleRemove}/>
                            </div>
                            
                            
                        ))}
                        
                    </Col>
                </Row>
                <Modal open={this.state.open} onClose={this.handleClose}>
                    <div className="border" style={{width:"256px",height:"256px",textAlign:"center"}}></div>
                    <h3>{this.state.details.nom}</h3>
                    <p>Prix : {this.state.details.prix}</p>
                    <p>Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent
        rhoncus congue ipsum elementum lobortis. Ut ligula purus, ultrices id
        condimentum quis, tincidunt quis purus. Proin quis enim metus. Nunc
        feugiat odio at eros porta, ut rhoncus lorem tristique. Nunc et ipsum eu
        ex vulputate consectetur vel eu nisi. Donec ultricies rutrum lectus, sit
        ame feugiat est semper vitae. Proin varius imperdiet consequat. Proin eu
        metus nisi. In hac habitasse platea dictumst. Vestibulum ac ultrices
        risus. Pellentesque arcu sapien, aliquet sed orci sit amet, pulvinar
        interdum velit. Nunc a rhoncus ipsum, maximus fermentum dolor. Praesent
        aliquet justo vitae rutrum volutpat. Ut quis pulvinar est.</p>
                </Modal>
            </Container>
            
        )
    }

}

export default Shop