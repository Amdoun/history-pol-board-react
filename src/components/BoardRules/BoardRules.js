import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import './boardrules.css'

class BoardRules extends Component {
    render(){
        return(
            <Container className="boardrules-main mt-4 p-3 text-center">
                <h2>Board Rules</h2>
                <ol className="text-left">
                    <li className="mt-3">No spam. All automated messages, advertisements, and links to competitor websites will be deleted immediately.</li>
                    <li className="mt-2">Post in relevant sub-forums only. Messages posted in the wrong topic area will be removed and placed in the correct sub-forum by moderators.</li>
                    <li className="mt-2"> Respect other users. No flaming or abusing fellow forum members. Users who continue to post inflammatory, abusive comments will be deleted from the forum after two warnings are issued by moderators.</li>
                    <li className="mt-2">Harassment. No threats or harassment of other users will be tolerated. Any instance of threatening or harassing behavior is grounds for deletion from the forums.</li>
                    <li className="mt-2">Adult content. No profanity is allowed. Posts containing adult material will be deleted.</li>
                    <li className="mt-2">Bandwidth. All images and signatures must be 500 x 500 pixels or smaller. Posts containing over-sized images and signatures will be removed.</li>
                    <li className="mt-2">Illegal content. No re-posting of copyrighted materials or other illegal content is allowed. Any posts containing illegal content or copyrighted materials will be deleted.</li>
                </ol>
                <br/>
                <br/>
                <Button href="/discussions">Back to discussions</Button>
                <Button href="/polls" className="ml-2">Back to polls</Button>
            </Container>
        )
    }
}

export default BoardRules