import React, {Component} from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import Event from './Events/Event'
import ClipLoader from 'react-spinners/ClipLoader';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            events: [],
            births: [],
            deaths: [],
            loading: true,
        }
    }

    componentDidMount(){
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://history.muffinlabs.com/date'
        fetch(proxyUrl + targetUrl)
        .then(blob => blob.json())
        .then(data => {
            this.setState({
                loading: false,
                events: data.data.Events,
                births: data.data.Births,
                deaths: data.data.Deaths,
            })
        })
        .catch(e => {
            console.log(e);
        });
    }

    render(){
        return(
            <Container>

                <p className="mt-3"><h4>Welcome to ThePoliticsBoard.</h4>
                <br/>
                You can view and start <a href="/discussions">discussions</a> and <a href="/polls">polls</a>
                <br/>
                Today's date is April 30, you can view important historical events that happened on this same day of the year.</p>

                <Tabs>
                    <Tab eventKey="events" title="Events">
                        {this.state.loading && <div className="text-center mt-4">
                            <ClipLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                            />
                        </div>}
                        
                        {this.state.events.map((el) => (
                            <Event event={el}/>
                        ))}
                        
                    </Tab>
                    <Tab eventKey="births" title="Births">
                        {this.state.loading && <div className="text-center mt-4">
                            <ClipLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                            />
                        </div>}
                        {this.state.births.map((el) => (
                            <Event event={el}/>
                        ))}    
                    </Tab>
                    <Tab eventKey="deaths" title="Deaths">
                        {this.state.loading && <div className="text-center mt-4">
                            <ClipLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                            />
                        </div>}
                        {this.state.deaths.map((el) => (
                            <Event event={el}/>
                        ))}    
                    </Tab>
                </Tabs>
                
            </Container>
        )
    }
}

export default Home;