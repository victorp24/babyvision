import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

{/*This is our custom component to represent the temperature progress bar on our
monitor web page. We import ProgressBar from react-bootstrap and we pass properties onto it
depending on the properties passed to TempProgressBar.*/}

{/*The appearance of the Temperature Progress Bar is based on the temperature value passed to it.
Here is an outline of what it looks like:
1.) For temperature levels less than 14°C or greater than 28°C
    we return a "danger" red progress bar that is 25% full, indicating the baby is in danger
2.) For temperature levels between 14°C and 16°C or between 26°C and 28°C
    we return a "warning" yellow progress bar that is 50% full, indicating the baby's room temperature is concerning
3.) For temperature levels between 16°C and 18°C or between 23°C and 26°C
    we return a "info" blue progress bar that is 75% full, indicating the baby's room temperature is OK, but could be better
4.) For temperature levels between 18% and 23%
    we return a "success" green progress bar that is 100% full, indicating the baby's room temperature is at an optimal state
*/}

class TempProgressBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            temperature: this.props.temperature,
        };
    }

    render() {
        if(this.props.temperature == null) {
            return(
                <ProgressBar animated variant = "danger" striped now = {0} />
            );
        } else if(this.props.temperature < 14 || this.props.temperature >= 28 ) {
            return (
                <ProgressBar animated variant = "danger" striped now = {25}/>
            );
        } else if (this.props.temperature >= 14 && this.props.temperature  < 16) {
            return (
                <ProgressBar animated variant = "warning" striped now = {50}/>
            );
        } else if (this.props.temperature >= 16 && this.props.temperature  < 18) {
            return (
                <ProgressBar animated variant = "info" striped now = {75} />
            );
        } else if (this.props.temperature >= 18 && this.props.temperature  < 23) {
            return (
                <ProgressBar animated variant = "success" striped now = {100}/>
            );
        } else if (this.props.temperature >= 23 && this.props.temperature  < 26) {
            return (
                <ProgressBar animated variant = "info" striped now = {75} />
            );
        } else if (this.props.temperature >= 26 && this.props.temperature  < 28) {
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

export default TempProgressBar;