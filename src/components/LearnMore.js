import React, {Component} from 'react'
import {Container, Jumbotron} from 'react-bootstrap'

class LearnMore extends Component {
    render(){
        return(
            <Container>
                <Jumbotron>
                    <h1>
                        LEARN MORE
                    </h1>
                    <p>
                        Mauris ac arcu sit amet dui interdum bibendum a sed diam. Praesent
                        rhoncus congue ipsum elementum lobortis. Ut ligula purus, ultrices id
                        condimentum quis, tincidunt quis purus. Proin quis enim metus. Nunc
                        feugiat odio at eros porta, ut rhoncus lorem tristique. Nunc et ipsum eu
                        ex vulputate consectetur vel eu nisi. Donec ultricies rutrum lectus, sit
                        ame feugiat est semper vitae. Proin varius imperdiet consequat. Proin eu
                        metus nisi. In hac habitasse platea dictumst. Vestibulum ac ultrices
                        risus. Pellentesque arcu sapien, aliquet sed orci sit amet, pulvinar
                        interdum velit. Nunc a rhoncus ipsum, maximus fermentum dolor. Praesent
                        aliquet justo vitae rutrum volutpat. Ut quis pulvinar est.
                    </p>
                </Jumbotron>
            </Container>
        )
    }
}

export default LearnMore;