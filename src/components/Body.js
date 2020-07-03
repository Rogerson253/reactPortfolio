import React, { Component } from 'react';
import {FaHtml5} from 'react-icons/fa';
import {FaCss3} from 'react-icons/fa';
import {FaJava} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa';

class Body extends Component {
    render() {
        return (
            <div>
               <section className='container'>
                    <div className="introContainer">
                        <p id="intro">Hello, my name is Rogerson. I am a full stack web developer who can make your digital dreams a reality. Here is a link to my resume:
                            <a href="https://docs.google.com/document/d/1TfYeKFgVNWCf7a1d5gJruwIegq9rQhT4YdeW83teByg/edit?usp=sharing">
                                Resume
                            </a>
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Skills</h2>
                    <div className="icons">
                    <FaHtml5 />
                    <FaCss3 />
                    <FaJava />
                    <FaNodeJs />
                    </div>
                </section>

                







            </div>
        );
    }
}

export default Body;
