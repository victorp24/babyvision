import React, { Component } from 'react';
import MusicPage from './musicpage';
import SensorPage from './sensorpage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

{/*IGNORE THIS PAGE: We are not using this page for our website and for project2*/}

const Main = () => (
    <Router>
        <div>
            <Route exact path = "/" component = {SensorPage} />
            <Route path = "/musicpage" component = {MusicPage} />
        </div>
    </Router>
)
export default Main;