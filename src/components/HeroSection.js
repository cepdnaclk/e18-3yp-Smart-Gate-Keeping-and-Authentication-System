import React from "react";
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){
    return(
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted/>
            {/* <image src="/images/img-1.jpg"/> */}
            <h1>what are you waiting for?</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button 
                className='hero-btns' 
                buttonStyle = 'btn--outline'
                buttonSize='btn--large'
                >
                    Get Started
                </Button>
                <Button 
                className='hero-btns' 
                buttonStyle = 'btn--primary'
                buttonSize='btn--large'
                >
                    Watch Trailer<i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
