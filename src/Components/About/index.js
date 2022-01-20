import React from 'react';
import {AboutTitleContainer, AboutTitle, AboutH1, AboutH3, AboutPContainer, AboutP, AboutPEd} from './AboutElements'

const About = () => {
    return (
        <>
           <AboutTitleContainer id='about'>
               <AboutTitle className="font-face-bbo">About</AboutTitle>
                <AboutH1 className="font-face-bb">I'm Madison. Problem solver, maker and designer.</AboutH1>
            </AboutTitleContainer>
                <AboutPContainer>
                    <AboutP className="font-link">I am always looking to learn new technologies and improve my skills. Adapt and overcome, this year I took the plunge to learn coding to bring my ideas to life.
                     Combining my marketing, coding, and design skills I want to make beautiful looking products for every consumer.</AboutP>
                        <AboutH3 className="font-face-bb">Education</AboutH3>
                            <AboutPEd className="font-link">BSBA in Marketing from Northern Arizona University (2019)</AboutPEd>
                            <AboutPEd className="font-link">Deep Dive Learning Academy, Fullstack bootcamp (2021)</AboutPEd>
                        <AboutH3 className="font-face-bb">Skills</AboutH3>
                            <AboutPEd className="font-link">HTML / CSS / React / Javascript / MySQL / NodeJS / Express / Mongoose / MongoDB / Photoshop / Illustrator / InDesign / Lightroom / Figma</AboutPEd>
                </AboutPContainer>
        </>
    )
}

export default About;
