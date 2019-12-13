import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Contribution from './Contribution'
import Discussion from './Discussion'

class DiscussionPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            discussion: [],
            launchinguser: '',
            contributions: [],
            authenticated: false,
            memberid: '',
            relatedd: []
        }
        this.textbody = React.createRef()
    }

    componentDidMount(){
        fetch('http://localhost:8080/discussion/'+this.props.match.params.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            method: 'GET',
        }).then(response => response.json()).then((data) => {

            fetch('http://localhost:8080/member/'+data.launcher.memberid, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            }).then(response1 => response1.json()).then((data1) => {
                console.log(data)
                console.log(data1)
                this.setState({
                    discussion: data,
                    launchinguser: data1.name + " "  + data1.family
                })
            }).catch(e => {
                console.log(e);
            });



        }).catch(e => {
            console.log(e);
        });


        fetch('http://localhost:8080/contributions/'+this.props.match.params.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            method: 'GET',
        }).then(response => response.json()).then((data) => {
            console.log(data.username)
            this.setState({
                contributions: data
            })
        }).catch(e => {
            console.log(e);
        });


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


        fetch('http://localhost:8080/discussionreld/'+this.props.match.params.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            method: 'GET',
        }).then(response => response.json()).then((data) => {
            console.log(data)
            this.setState({
                relatedd: data
            })
        }).catch(e => {
            console.log(e);
        });
        
    }



    onCreate = () => {
        fetch('http://localhost:8080/contribution?contributor='+this.state.memberid+'&discussion='+this.props.match.params.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('token')
              },
            method: 'POST',
            body: JSON.stringify({
                "text":this.textbody.current.value,
            })
        }).then(response => response.json()).then(function(data) {
            console.log(data)
        }).catch(e => {
            console.log(e);
        });
    }

    render(){
        return(
        <Container fluid className="mt-3">
            <div  style={{fontSize:'25px'}}>
                <b>{this.state.launchinguser}</b>
                <br/>
                {this.state.discussion.launching}
            </div>
            {this.state.authenticated && 
            <div>
                
                        <Form onSubmit={(e) => {
                            e.preventDefault()
                            this.onCreate()
                            this.props.history.push("/discussion/"+this.props.match.params.id)
                        }}>
                            <Form.Group className="mt-3" controlId="discussionBody">
                                <Form.Label><b>Comment</b></Form.Label>
                                <Form.Control as="textarea" ref={this.textbody}/>
                            </Form.Group>
                            <Button type="submit" className="mt-2">Submit</Button>
                        </Form>
                    
            </div>}
            <br/>
            <div className="ml-4">
                {this.state.contributions.map(el => (
                    <Contribution cont={el}/>
                ))}

            </div>

            <br/>
            <h5>Related discussions</h5>
            {this.state.relatedd.filter(e => e.discussionid !== Number.parseInt(this.props.match.params.id)).map(el => (
                <Discussion disc={el}/>
            ))}
        </Container>)
    }
}

export default DiscussionPage