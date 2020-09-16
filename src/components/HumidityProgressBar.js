import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

{/*This is our custom component to represent the humidity progress bar on our
monitor web page. We import ProgressBar from react-bootstrap and we pass properties onto it
depending on the properties passed to HumidityProgressBar.*/}

{/*The appearance of the Humidity Progress Bar is based on the humidity value passed to it.
Here is an outline of what it looks like:
1.) For humidity levels less than 20% or greater than 70%
    we return a "danger" red progress bar that is 25% full, indicating the baby is in danger
2.) For humidity levels between 20% and 25% or between 65% and 70%
    we return a "warning" yellow progress bar that is 50% full, indicating the baby's room humidity is concerning
3.) For humidity levels between 25% and 30% or between 60% and 65%
    we return a "info" blue progress bar that is 75% full, indicating the baby's room humidity is OK, but could be better
4.) For humidity levels between 30% and 60%
    we return a "success" green progress bar that is 100% full, indicating the baby's room humidity is at an optimal state
*/}

class HumidityProgressBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            humidity: this.props.humidity,
        };
    }

    render() {
        if(this.props.humidity == null) {
            return(
                <ProgressBar animated variant = "danger" striped now = {0} />
            );
        } else if(this.props.humidity < 20 || this.props.humidity >= 70 ) {
            return (
                <ProgressBar animated variant = "danger" striped now = {25}/>
            );
        } else if (this.props.humidity >= 20 && this.props.humidity  < 25) {
            return (
                <ProgressBar animated variant = "warning" striped now = {50}/>
            );
        } else if (this.props.humidity >= 25 && this.props.humidity  < 30) {
            return (
                <ProgressBar animated variant = "info" striped now = {75} />
            );
        } else if (this.props.humidity >= 30 && this.props.humidity  < 60) {
            return (
                <ProgressBar animated variant = "success" striped now = {100}/>
            );
        } else if (this.props.humidity >= 60 && this.props.humidity  < 65) {
            return (
                <ProgressBar animated variant = "info" striped now = {75} />
            );
        } else if (this.props.humidity >= 65 && this.props.humidity  < 70) {
            return (
                <ProgressBar animated variant = "warning" striped now = {50} />
            );
        } else {
            return (
                <ProgressBar animated variant = "danger" striped now = {0} />
            );
        }
    }
}

export default HumidityProgressBar;