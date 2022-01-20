import React from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBG, VideoBg, HeroContent, HeroH1, HeroH2, HeroP} from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer id="home">
            <HeroBG>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBG>
            <HeroContent>
                <HeroH1 className="font-face-bbo">Hi, I am</HeroH1>
            </HeroContent>
            <HeroContent>
                <HeroH2 className="font-face-bb">Madison Kelly</HeroH2>
            </HeroContent>
            <HeroContent>
                <HeroP className="font-link">Fullstack Developer with interest in design</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
