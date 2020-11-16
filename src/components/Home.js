import React, { Component } from 'react';
import './Home.css';
import {Button} from 'react-bootstrap'



export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="head-line">
                    <h3>Hello there! </h3>
                </div>
                <div className="introduction">
                    <h5>My name is Gunner Andersen, Im a 
                    <a href="https://es.wikipedia.org/wiki/MongoDB"><Button id="mern-button">M</Button></a>
                    <a href="https://en.wikipedia.org/wiki/Express.js"><Button id="mern-button">E</Button></a> 
                    <a href="https://es.wikipedia.org/wiki/React"><Button id="mern-button">R</Button></a> 
                    <a href="https://es.wikipedia.org/wiki/Node.js"><Button id="mern-button">N</Button></a>  
                    fullstack web developer</h5>
                </div>
            </div>
        )
    }
}
