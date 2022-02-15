import React from 'react';
import { ProjectTitleContainer, ProjectTitle, ProjectContainer, ExampleTitle, ExampleLink, ExampleDesc } from "./ProjectElements";

const Project = () => {
    return (
        <>
            <ProjectTitleContainer id="project">
                <ProjectTitle className="font-face-bbo">Projects</ProjectTitle>
            </ProjectTitleContainer>
            <ProjectContainer>
                <ExampleTitle className="font-face-bb">Rip Fitness Tracker</ExampleTitle>
                <ExampleLink className="font-link"><a href="https://rip-tracker.herokuapp.com/">Live Site</a></ExampleLink>
                <ExampleDesc className="font-link">This is a site to track your fitness, you can make a username and use that to share your results with your friends on your dashboard. This project was created with ReactJS, MongoDB, Express, Mongoose, CSS, and Node.js.</ExampleDesc>
            </ProjectContainer>
            <ProjectContainer>
                <ExampleTitle className="font-face-bb">National Park Finder</ExampleTitle>
                <ExampleLink className="font-link"><a href="https://epic-boyd-b58189.netlify.app">Live Site</a></ExampleLink>
                <ExampleDesc className="font-link">This app was made to quickly access all National Parks, Monuments, and Sites. By searching with the state code every destination will appear and you can explore them further.
                This project was created with html, css, and javascript using the National Park API.</ExampleDesc>
            </ProjectContainer>
            <ProjectContainer>
                <ExampleTitle className="font-face-bb">Elixr Real Estate</ExampleTitle>
                <ExampleLink className="font-link"><a href="https://silly-mccarthy-d4bde0.netlify.app/">Live Site</a></ExampleLink>
                <ExampleDesc className="font-link">This site was made to be a mock of a real estate companies website, to show rentals and listings.
                This site was made with ReactJS, CSS styled components, and react router</ExampleDesc>
            </ProjectContainer>
            <ProjectContainer>
                <ExampleTitle className="font-face-bb">This Portfolio</ExampleTitle>
                <ExampleDesc className="font-link">My portfolio was such a fun project for me to express myself a little bit with coding. I had a lot of fun building this project from scratch and I utilized ReactJS and CSS Styled Components.</ExampleDesc>
            </ProjectContainer>
        </>
    )
}

export default Project
