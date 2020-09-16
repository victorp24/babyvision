import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

{/*This is a custom react component that renders an alert message to the website depending on
the following properties passed to the component: safe, goodHeading, badHeading, goodMessage, badMessage.
When the value of safe is not 0, then we return an alert message with goodHeading and goodMessage.
When the value of safe is 0, then we return an alert message with badHeading and badMessage
*/}

class CustomAlert extends Component {
    render() {
        if(this.props.safe == 0) {
            return(
                <Alert variant = "danger">
                    <Alert.Heading>{this.props.badHeading}</Alert.Heading>
                    <hr/>
                    {this.props.badmessage}
                </Alert>
            );
        } else {
            return(
                <Alert variant = "success">
                    <Alert.Heading>{this.props.goodHeading}</Alert.Heading>
                    <hr/>
                    {this.props.goodmessage}
                </Alert>
            );
        }
    }
}
export default CustomAlert;