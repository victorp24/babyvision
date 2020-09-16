import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

{/*This is a simple home page that displays information about each web page and describes
the functionality of our product. We use Row, Columns, from react-bootstrap to layout the design,
as well as Image to display photos, and a Jumbotron to give a good heading to the home page.
We added custom styles in our imported Home.css file*/}

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to BabyVision!</h1>
                    <p> The place to be to ensure your baby's safety.<br></br>Also the #1 baby monitor on the UBC market.</p>
                <Link to="/monitor">
                    <Button bsStyle = "primary" id = "centerWrapper">Monitor your baby</Button>
                </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm = {4} className = "sections">
                        <Image src = "pictures/camera.png" id="pic1"/>
                        <h3>Live Feed</h3>
                        <p id = "margins1">With our state-of-the-art face recognition technology, our camera is able to detect
                            whenever your baby is face down on his or her pillow. Additionally,
                         through our Monitor page, you can view your baby through our live feed in real-time.</p>
                    </Col>
                    <Col xs={12} sm = {4} className = "sections">
                        <Image src = "pictures/note.png" id="pic2"/>
                        <h3>Lullaby Station</h3>
                        <p id = "margins2">You can play your baby a lullaby by simply visiting our
                         Lullaby Station page. You can choose from a plethora of lullabies, as well
                        as a light show over your baby's head. This allows you to put your baby to sleep
                         simply from your computer.</p>
                    </Col>
                    <Col xs={12} sm = {4} className = "sections">
                        <Image src = "pictures/face2.png" id="pic3"/>
                        <h3>Baby's Environment</h3>
                        <p id=  "margins3">Through our microphones, we are able to detect and let you know when your baby is
                        showing signs of distress. We can also
                            detect hostile room environments through our temperature and humidity sensors, notifying you if it threatens your baby's well-being.</p>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Home;