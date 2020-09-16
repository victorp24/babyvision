import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

{/*We are importing ProgressBar from react-bootstrap and returning a static custom progress bar for our
monitor. This LegendProgressBar is just a representation of the four states that the temperature or humidity levels
can be. The four states are:
1.) Danger - the temperature or humidity is at dangerous levels. We indicate this with a 25% full red bar
2.) Warning - the temperature or humidity is at concerning levels, approaching fatal states. We indicate this with a 50% full yellow bar
3.) Subpar - the temperature or humidity is at an OK level, but can be improved. We indicate this with a 75% full blue bar
4.) Optimal - the temperature or humidity level is at an optimal level. We indicate this with a 100% full green bar
*/}

class LegendProgressBar extends Component {


    render() {
        return (
            <ProgressBar>
                <ProgressBar striped animated variant="danger" now={25} key={1} label = "Danger" />
                <ProgressBar striped animated variant = "warning" now={25} key={2} label = "Warning"/>
                <ProgressBar striped animated variant= "info" now={25} key={3} label = "Subpar"/>
                <ProgressBar striped animated variant ="success" now = {25} key = {4} label = "Optimal"/>
            </ProgressBar>
        );
    }
}
export default LegendProgressBar;