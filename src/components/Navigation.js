import React, {Component} from 'react'
import {Navbar, Nav, Button, Image, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'


class Navigation extends Component{

    constructor(props){
        super(props)
        this.state = {
            open: false,
            authenticated: false,
            username: '',
            show: false,
        }
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
                username: data.username
            })
        }).catch(e => {
            this.setState({
                show: true
            })
            console.log(e);
        });
    }

    openModal = () => {
        this.setState({
            open: true
        })
    }

    closeModal = () => {
        this.setState({
            open: false
        })
    }

    render(){
        return(
            <Navbar bg="dark" variant="dark" sticky="top" default collapseOnSelect expand="sm" style={{zIndex:'1'}}>
                <Navbar.Brand>
                    <Link to="/">
                        ThePoliticsBoard
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/discussions">Discussions</Nav.Link>
                    <Nav.Link href="/polls">Polls</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                {this.state.show && !this.state.authenticated && <Nav>
                    <Button onClick={()=>this.openModal()} className='mr-2'>Login</Button>
                    <Button href="/signup" variant="info">Sign up</Button>
                </Nav>}
                {this.state.authenticated && 
                <Nav className="vertical-align">
                <div className="mt-2" style={{color:"white"}}>{this.state.username}</div>
                
                <NavDropdown alignRight title={<Image
                className="mr-2"
                width={32}
                style={{'marginTop':'-8px','marginBottom':'-5px'}}
                height={32}
                src="https://us.123rf.com/450wm/pikepicture/pikepicture1612/pikepicture161200526/68824651-homme-d%C3%A9faut-placeholder-avatar-profil-gris-image-isol%C3%A9-sur-fond-blanc-pour-votre-conception-vector-illu.jpg?ver=6"
                roundedCircle/>}  id="basic-nav-dropdown">    
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/parametres" >Settings</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => localStorage.removeItem('token')} href="/">Logout</NavDropdown.Item>
                </NavDropdown>      
            </Nav>

                }
                
                </Navbar.Collapse>
                <LoginModal open={this.state.open} closeModal={()=>this.closeModal}/>
            </Navbar>
        )
    }
}

export default Navigation;