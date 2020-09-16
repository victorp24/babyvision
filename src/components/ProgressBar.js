import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

{/*IGNORE THIS PAGE: We are not using this component for our website and for project2*/}

class ProgressBarCustom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            percentage: this.props.percentage,
        };
    }

    render() {
        if(this.state.percentage > 50) {
            return(
                <ProgressBar now = {100} />
            );
        } else {
            return (
                <ProgressBar striped now = {20} label = "victor" />
            );
        }
    }
}

export default ProgressBarCustom;