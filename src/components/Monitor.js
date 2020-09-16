import React, {Component} from 'react'
import {Image, Container, Row, Col, Alert} from "react-bootstrap";
import './Monitor.css';
import TempProgressBar from "./TempProgressBar";
import LegendProgressBar from "./LegendProgressBar";
import HumidityProgressBar from "./HumidityProgressBar";
import CustomAlert from "./CustomAlert";

import axios from 'axios'

{/*This is our monitor page setup and displayed react components based on its defined state,
we import our custom components and the axios library to do HTTP get/post requests to our server*/}

class Monitor extends Component {
    constructor(props) {
        {/*we are setting up our state definitions, and for now setting to null*/}
        super(props);
        this.state = {
            temperature: null,
            humidity: null,
            crying: 0,
            image: "",
            faceDetected: null,
            motionDetected: null
        };
    }

    updateSensors = () => {
        {/*Here we are using the axios library to do an HTTP get request to our express backend server,
        We do this to update state, because we render different components on this page depending on our state,
        So we retrieve the temperature, humidity, crying flag, the baby's image, face detection flag, and
        motion detection flag. We call this function periodically so we constantly poll data and update the
        web page
        */}
        axios.get('/backendAPI/monitorData')
            .then((res) => {
                console.log(res);
                const temperature = res.data[0].temperature;
                const humidity = res.data[0].humidity;
                const crying = res.data[0].crying;
                this.setState({temperature, humidity, crying});
            })
        axios.get('/backendAPI/imageStream')
            .then((res) => {
                console.log(res);
                const image = res.data[0].image;
                const faceDetected = res.data[0].faceDetected;
                const motionDetected = res.data[0].motionDetected;
                this.setState({image, faceDetected, motionDetected});
            })
    }

    componentDidMount() {
        {/*We are calling updateSensors in this function. This function is what starts the lifecycle
        of this web page. We update our sensor readings, and we set up an interval of every 500 ms where
        we do HTTP get requests so that our data is up-to-date in real time*/}
        this.updateSensors();
        this.interval = setInterval(() => this.updateSensors(), 500);
    }

    componentWillUnmount() {
        {/*Every interval we unmount the site components and remount every 500 ms*/}
        clearInterval(this.interval);
    }

    render() {
        {/*This will be the components that show up in our Monitor web page, and it dynamically
        changes when our state changes, which is periodically polled from server every 500ms
        We use containers, rows, and columns imported from react-bootstrap so we can layout
        components and position them where we want. We import customized components such as
         CustomAlert, LegendProgressBar, TempProgressBar, HumidityProgressBar, and Alert and we
         display them, and depending on the properties passed to them they dynamically change.
         For a description of how each component behaves, visit their corresponding files in the
         components folder and in <insert-component-name>.js*/}
        return (
            <Container>
                <Row>
                    <Col>
                        <h3 id = "photoHeading1">Monitor your baby in real time.</h3>
                        <CustomAlert
                            safe = {this.state.faceDetected}
                            goodHeading = "Face detected."
                            badHeading = "No face detected."
                            goodmessage = "Your baby is on his/her back."
                            badmessage = "Warning! Your baby is on his/her belly."
                        />
                        <Image src = {this.state.image} thumbnail className = "image"/>
                    </Col>
                    <Col>
                        <h3 id = "photoHeading2">Get a feel for the environment.</h3>
                        <Alert variant = "primary">
                            <Alert.Heading>The optimal environment for your baby:</Alert.Heading>
                        <hr/>
                            <p>
                                Our research says that a room temperature of 18-23°C accompanied with light bedding is
                                 comfortable and safe for sleeping babies. As for the humidity level, doctors recommend
                                30-60%. Keeping the humidity level below 60% inhibits mold growth which in turn decreases the
                                 potential for allergic reactions.
                            </p>
                        </Alert>
                        <div style={{marginTop: '10px', marginBottom: '10px'}}>
                            <LegendProgressBar/>
                        </div>
                        <div className = "sensors">
                            <h5>Temperature: {this.state.temperature}°C</h5>
                            <TempProgressBar temperature = {this.state.temperature}/>
                        </div>
                        <div className = "sensors">
                            <h5>Humidity: {this.state.humidity}%</h5>
                            <HumidityProgressBar humidity = {this.state.humidity}/>
                        </div>
                        <div className = "sensors">
                            <Row>
                                <Col>
                                    <CustomAlert
                                        safe = {this.state.crying-1}
                                        style = {{float:'right'}}
                                        goodHeading = "Our microphones detect:"
                                        badHeading = "Our microphones detect:"
                                        goodmessage = "Your baby is not crying."
                                        badmessage = "Your baby is crying!"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Monitor;
