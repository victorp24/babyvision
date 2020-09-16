import React, {Component} from 'react';
import {Button, Col, Row, Container, Image, ButtonGroup, Tab, ListGroup, ListGroupItem} from "react-bootstrap";
import './LullabyStation.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import axios from 'axios'

{/*This is our component that represents our Lullaby Station page. We used Row, Col, Container, from react-bootstrap
to layout out page nicely. We use axios for post and get requests to our backend server. We used
Slider from react-rangeslider in order to implement a volume bar that the user can change.
We use Buttons to let the user interact with our express database. Pressing a button does a post request using
axios to our backend server, letting our python scripts know what the user wants to do*/}

class LullabyStation extends Component {

    constructor (props, context) {
        super(props, context)
        this.state = {
            volume: null,
            green: null,
            red: null,
            yellow: null,
            yellowgreen: null,
            yellowred: null,
            allcolors: null,
            lights: null,
            stopmusic: null,
            twinkle: null,
            hush: null,
            rock: null,
            sheep: null,
            row: null

        }
    }

    componentDidMount() {
        {/*We are calling copyDatabase in this function. This function is what starts the lifecycle
        of this web page. We update our database readings, and we set up an interval of every 1000 ms where
        we do HTTP get requests so that our data is up-to-date in real time*/}
        this.copyDatabase();
        this.interval = setInterval(() => this.copyDatabase(), 1000);
    }

    componentWillUnmount() {
        {/*Every interval we unmount the site components and remount every 1000 ms*/}
        clearInterval(this.interval);
    }

    handleChangeStart = () => {
        {/*displays on console when the slider has started moving*/}
        console.log('Change event started')
    }

    handleChange = value => {
        {/*we perform this and update state so that we can post to our database the
        volume level that we are putting in the volume slider*/}
        this.setState({
            volume: value
        })
        axios.post('/backendAPI/tempVals', {
            twinkle: this.state.twinkle,
            hush: this.state.hush,
            rock: this.state.rock,
            sheep: this.state.sheep,
            row: this.state.row,
            stopmusic: this.state.stopmusic,
            green: this.state.green,
            red: this.state.red,
            yellow: this.state.yellow,
            yellowgreen: this.state.yellowgreen,
            yellowred: this.state.yellowred,
            allcolors: this.state.allcolors,
            lights: this.state.lights,
            volume: this.state.volume
        })
    }

    handleChangeComplete = () => {
        {/*displays on console when the slider has stopped moving*/}
        console.log('Change event completed')
    }

    copyDatabase = () => {
        {/*We call this function every 1000ms in our componentDidMount so that we are constantly polling
        data from our server so we are up-to-date, so when we post data to our database when we press buttons,
        we do not override the database with old values*/}
        axios.get('/backendAPI/tempVals')
            .then((res) => {
                console.log(res);
                const volume = res.data[0].volume;
                const green = res.data[0].green;
                const red = res.data[0].red;
                const yellow = res.data[0].yellow;
                const yellowgreen = res.data[0].yellowgreen;
                const yellowred = res.data[0].yellowred;
                const allcolors = res.data[0].allcolors;
                const stopmusic = res.data[0].stopmusic;
                const lights = res.data[0].lights;
                const twinkle = res.data[0].twinkle;
                const hush = res.data[0].hush;
                const rock = res.data[0].rock;
                const sheep = res.data[0].sheep;
                const row = res.data[0].row;
                this.setState({ volume, green, red, yellow,
                yellowgreen, yellowred, allcolors, lights, stopmusic, twinkle, hush, rock, sheep, row});
            })
    }

    playTwinkle = () => {
        {/*This is a function that is called when we press the Play button for Twinkle Twinkle Little Star
        We have a similar function for each Play button on each song. We post to the backend so our
        python scripts can tell that the user has requested to play a song*/}
        axios.post('/backendAPI/tempVals', {
            twinkle: 1,
            hush: 0,
            rock: 0,
            sheep: 0,
            row: 0,
            stopmusic: 0,
            green: this.state.green,
            red: this.state.red,
            yellow: this.state.yellow,
            yellowgreen: this.state.yellowgreen,
            yellowred: this.state.yellowred,
            allcolors: this.state.allcolors,
            lights: this.state.lights,
            volume: this.state.volume
        })
    }

    playHush = () => {
        {/*All play_____ functions have the same functionality as playTwinkle*/}
        axios.post('/backendAPI/tempVals', {
            twinkle: 0,
            hush: 1,
            rock: 0,
            sheep: 0,
            row: 0,
            stopmusic: 0,
            green: this.state.green,
            red: this.state.red,
            yellow: this.state.yellow,
            yellowgreen: this.state.yellowgreen,
            yellowred: this.state.yellowred,
            allcolors: this.state.allcolors,
            lights: this.state.lights,
            volume: this.state.volume
        })
    }

    playRock = () => {
        axios.post('/backendAPI/tempVals', {
            twinkle: 0,
            hush: 0,
            rock: 1,
            sheep: 0,
            row: 0,
            stopmusic: 0,
            green: this.state.green,
            red: this.state.red,
            yellow: this.state.yellow,
            yellowgreen: this.state.yellowgreen,
            yellowred: this.state.yellowred,
            allcolors: this.state.allcolors,
            lights: this.state.lights,
            volume: this.state.volume
        })
    }

    playSheep = () => {
        axios.post('/backendAPI/tempVals', {
            twinkle: 0,
            hush: 0,
            rock: 0,
            sheep: 1,
            row: 0,
            stopmusic: 0,
            green: this.state.green,
            red: this.state.red,
            yellow: this.state.yellow,
            yellowgreen: this.state.yellowgreen,
            yellowred: this.state.yellowred,
            allcolors: this.state.allcolors,
            lights: this.state.lights,
            volume: this.state.volume
        })
    }

    playRow = () => {
        axios.post('/backendAPI/tempVals', {
            twinkle: 0,
            hush: 0,
            rock: 0,
            sheep: 0,
            row: 1,
            stopmusic: 0,
            green: this.state.green,
            red: this.state.red,
            yellow: this.state.yellow,
            yellowgreen: this.state.yellowgreen,
            yellowred: this.state.yellowred,
            allcolors: this.state.allcolors,
            lights: this.state.lights,
            volume: this.state.volume
        })
    }

    stopMusic = () => {
        {/*Same functionality as playTwinkle, but tells the python scripts the user is requesting that we turn
        off any songs playing*/}
        axios.post('/backendAPI/tempVals', {
            twinkle: 0,
            hush: 0,
            rock: 0,
            sheep: 0,
            row: 0,
            stopmusic: 1,
            green: this.state.green,
            red: this.state.red,
            yellow: this.state.yellow,
            yellowgreen: this.state.yellowgreen,
            yellowred: this.state.yellowred,
            allcolors: this.state.allcolors,
            lights: this.state.lights,
            volume: this.state.volume
        })
    }

    yellowOn = () => {
        {/*Same functionality as playTwinkle, except it tells the python script that the user wants
        to start a light show for the baby, with all yellow LEDs on. All functions with colors in their names
        do the same functionality*/}
        axios.post('/backendAPI/tempVals', {
            twinkle: this.state.twinkle,
            hush: this.state.hush,
            rock: this.state.rock,
            sheep: this.state.sheep,
            row: this.state.row,
            stopmusic: this.state.stopmusic,
            green: 0,
            red: 0,
            yellow: 1,
            yellowgreen: 0,
            yellowred: 0,
            allcolors: 0,
            lights: 0,
            volume: this.state.volume
        })
    }

    greenOn = () => {
        {/*Same as yellowOn, but different color*/}
        axios.post('/backendAPI/tempVals', {
            twinkle: this.state.twinkle,
            hush: this.state.hush,
            rock: this.state.rock,
            sheep: this.state.sheep,
            row: this.state.row,
            stopmusic: this.state.stopmusic,
            green: 1,
            red: 0,
            yellow: 0,
            yellowgreen: 0,
            yellowred: 0,
            allcolors: 0,
            lights: 0,
            volume: this.state.volume
        })

    }

    redOn = () => {
        axios.post('/backendAPI/tempVals', {
            twinkle: this.state.twinkle,
            hush: this.state.hush,
            rock: this.state.rock,
            sheep: this.state.sheep,
            row: this.state.row,
            stopmusic: this.state.stopmusic,
            green: 0,
            red: 1,
            yellow: 0,
            yellowgreen: 0,
            yellowred: 0,
            allcolors: 0,
            lights: 0,
            volume: this.state.volume
        })

    }

    yellowGreenOn = () => {
        axios.post('/backendAPI/tempVals', {
            twinkle: this.state.twinkle,
            hush: this.state.hush,
            rock: this.state.rock,
            sheep: this.state.sheep,
            row: this.state.row,
            stopmusic: this.state.stopmusic,
            green: 0,
            red: 0,
            yellow: 0,
            yellowgreen: 1,
            yellowred: 0,
            allcolors: 0,
            lights: 0,
            volume: this.state.volume
        })

    }

    yellowRedOn = () => {
        axios.post('/backendAPI/tempVals', {
            twinkle: this.state.twinkle,
            hush: this.state.hush,
            rock: this.state.rock,
            sheep: this.state.sheep,
            row: this.state.row,
            stopmusic: this.state.stopmusic,
            green: 0,
            red: 0,
            yellow: 0,
            yellowgreen: 0,
            yellowred: 1,
            allcolors: 0,
            lights: 0,
            volume: this.state.volume
        })

    }

    allColorsOn = () => {
        this.copyDatabase()
        axios.post('/backendAPI/tempVals', {
            twinkle: this.state.twinkle,
            hush: this.state.hush,
            rock: this.state.rock,
            sheep: this.state.sheep,
            row: this.state.row,
            stopmusic: this.state.stopmusic,
            green: 0,
            red: 0,
            yellow: 0,
            yellowgreen: 0,
            yellowred: 0,
            allcolors: 1,
            lights: 0,
            volume: this.state.volume
        })
    }

    lightsOff = () => {
        {/*Tells the python scripts to turn off the light show*/}
        this.copyDatabase()
        axios.post('/backendAPI/tempVals', {
            twinkle: this.state.twinkle,
            hush: this.state.hush,
            rock: this.state.rock,
            sheep: this.state.sheep,
            row: this.state.row,
            stopmusic: this.state.stopmusic,
            green: 0,
            red: 0,
            yellow: 0,
            yellowgreen: 0,
            yellowred: 0,
            allcolors: 0,
            lights: 1,
            volume: this.state.volume
        })
    }


    render() {
        return (
            <Container>
                <h1 id="musicHeading">
                    Put your baby to sleep with a lullaby.
                </h1>
                <Row>
                    <Col id = "songs" md = "auto">
                        <ListGroup>
                            <ListGroup.Item>
                                Twinkle Twinkle Little Star
                                <Button onClick = {this.playTwinkle} variant ="primary" className = "songbutton">Play</Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Hush, Little Baby
                                <Button onClick = {this.playHush} variant = "primary" className = "songbutton">Play</Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Rockabye Baby
                                <Button onClick = {this.playRock} variant = "primary" className = "songbutton">Play</Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Baa Baa Black Sheep
                                <Button onClick = {this.playSheep} variant = "primary" className = "songbutton">Play</Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Row, Row, Row Your Boat
                                <Button onClick = {this.playRow} variant = "primary" className = "songbutton">Play</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className = "text-center">
                    <div id ="slider">
                        <Row>
                            <Image id = "marginTop" src = "pictures/speakerIconNew.png" height = "30px" width = "30px"/>
                            <Slider
                                min={0}
                                max={100}
                                value={this.state.volume}
                                onChangeStart={this.handleChangeStart}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                            />
                            </Row>
                    </div>
                </Row>
                <Row className="text-center">
                    <Col Col xs={12} sm = {4} className = "musicOff">
                    </Col>
                    <Col xs={12} sm = {4} className = "musicOff" >
                        <Button onClick = {this.stopMusic} variant = "danger" id = "off" >Music Off</Button>
                    </Col>
                    <Col xs={12} sm = {4} className = "musicOff">
                    </Col>
                </Row>
                <h1 id={"lightsHeading"}>
                    Calm your baby with some lights.
                </h1>
                <Row className="text-center">
                    <Col Col xs={12} sm = {2} className = "images">
                        <Image src = "pictures/green2.jpg" thumbnail className = "stock"/>
                        <Button onClick = {this.greenOn} variant = "primary" id = "lsb">Green</Button>
                    </Col>
                    <Col Col xs={12} sm = {2} className = "images">
                        <Image src = "pictures/red2.jpg" thumbnail className = "stock"/>
                        <Button onClick = {this.redOn} variant = "primary" id = "lsb">Red</Button>
                    </Col>
                    <Col xs={12} sm = {2} className = "images" >
                        <Image src = "pictures/yellow2.jpg" thumbnail className = "stock"/>
                        <Button onClick = {this.yellowOn} variant = "primary" id = "lsb">Yellow</Button>
                    </Col>
                    <Col xs={12} sm = {2} className = "images">
                        <Image src = "pictures/yellow-green2.jpg" thumbnail className = "stock"/>
                        <Button onClick = {this.yellowGreenOn} variant = "primary" id = "lsb">Yellow & Green</Button>
                    </Col>
                    <Col Col xs={12} sm = {2} className = "images">
                        <Image src = "pictures/yellow-red2.jpg"  thumbnail className = "stock"/>
                        <Button onClick = {this.yellowRedOn} variant = "primary" id = "lsb">Yellow & Red</Button>
                    </Col>
                    <Col Col xs={12} sm = {2} className = "images">
                        <Image src = "pictures/all2.jpg" thumbnail className = "stock"/>
                        <Button onClick = {this.allColorsOn} variant = "primary" id = "lsb">All Colours</Button>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col Col xs={12} sm = {4} className = "lightsOff">
                    </Col>
                    <Col xs={12} sm = {4} className = "lightsOff" >
                        <Button onClick = {this.lightsOff} variant = "danger" id = "off" >Lights Off</Button>
                    </Col>
                    <Col xs={12} sm = {4} className = "lightsOff">
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default LullabyStation;
