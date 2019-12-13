import React, { Component } from 'react'
import './events.css'
import ReactHtmlParser from 'react-html-parser';

class Event extends Component {
    render(){
        return(
            <div className="event-main p-3">
                <b>Year : </b> {this.props.event.year}
                <br/>
                <b>Event : </b> {this.props.event.text}
                <br/>
                {ReactHtmlParser(this.props.event.html)}
            </div>
        )
    }
}

export default Event;