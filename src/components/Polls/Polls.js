import React, { Component } from 'react'
import { Container, Form, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import './polls.css'
import { Link } from 'react-router-dom';
import Poll from './Poll'

class Polls extends Component {

    constructor(props){
        super(props)
        this.state = {
            authenticated: false,
            polls: [],
            memberid: '',
        }
        this.textbody = React.createRef()
    }

    componentDidMount(){
        fetch('http://localhost:8080/me', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
              },
            method: 'GET',
        }).then(response => response.json()).then((data) => {
            console.log(data.username)
            this.setState({
                authenticated: true,
                memberid: data.memberid
            })
        }).catch(e => {
            console.log(e);
        });


        fetch('http://localhost:8080/polls', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            method: 'GET',
        }).then(response => response.json()).then((data) => {
            console.log(data)
            this.setState({
                polls: data
            })
        }).catch(e => {
            console.log(e);
        });
    }

    onCreate = () => {
        fetch('http://localhost:8080/discussion?launcher='+this.state.memberid, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
              },
            method: 'POST',
            body: JSON.stringify({
                "launching":this.textbody.current.value,
            })
        }).then(response => response.json()).then(function(data) {
            console.log(data)
        }).catch(e => {
            console.log(e);
        });
    }

    render(){
        return(
            <Container fluid>
                <div className="discussions-header mt-3 p-3">
                    <h3>Board Rules</h3>
                    <p>Before posting, please refer to the <Link to="/rules">rules</Link> </p>
                </div>
                <br/>
                {this.state.polls.map((el) => 
                    <Poll disc={el}/>)}
            </Container>     
        )
    }
}

export default withRouter(Polls)