import React from 'react';
import { ProjectTitleContainer, ProjectTitle, ProjectContainer, ExampleTitle, ExampleLink, ExampleDesc } from "./ProjectElements";

const Project = () => {
    return (
        <>
            <ProjectTitleContainer>
                <ProjectTitle className="font-face-bbo">Projects</ProjectTitle>
            </ProjectTitleContainer>
            <ProjectContainer>
                <ExampleTitle className="font-face-bb">Travel Map</ExampleTitle>
                <ExampleLink className="font-link"><a href="https://epic-boyd-b58189.netlify.app">Live Site</a></ExampleLink>
                <ExampleDesc className="font-link">This is and interactive world map where you can use the search feature to go to any place and write and review about it to share with your friends. You can make your own profile and 
                see all your friends pins and where they have been in the world. This project was created with ReactJS, MongoDB, Express, Mongoose, CSS, and Node.js.</ExampleDesc>
            </ProjectContainer>
            <ProjectContainer>
                <ExampleTitle className="font-face-bb">Memories App</ExampleTitle>
                <ExampleLink className="font-link"><a href="https://epic-boyd-b58189.netlify.app">Live Site</a></ExampleLink>
                <ExampleDesc className="font-link">This is an app where you can share experiences that you have had and post them online to remember them. You create an account and can immediatly start posting to your page.
                This project was created with ReactJS, Mongoose, MongoDB, Express, Node.js, and CSS.</ExampleDesc>
            </ProjectContainer>
            <ProjectContainer>
                <ExampleTitle className="font-face-bb">National Park Finder</ExampleTitle>
                <ExampleLink className="font-link"><a href="https://epic-boyd-b58189.netlify.app">Live Site</a></ExampleLink>
                <ExampleDesc className="font-link">This app was made to quickly access all National Parks, Monuments, and Sites. By searching with the state code every destination will appear and you can explore them further.
                This project was created with html, css, and javascript using the National Park API.</ExampleDesc>
            </ProjectContainer><ProjectContainer>
                <ExampleTitle className="font-face-bb">This portfolio</ExampleTitle>
                <ExampleDesc className="font-link">My portfolio was such a fun project for me to express myself a little bit with coding. I had a lot of fun building this project from scratch and I utilized ReactJS and CSS Styled Components.</ExampleDesc>
            </ProjectContainer>
        </>
    )
}

export default Project
