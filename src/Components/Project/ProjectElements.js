import styled from 'styled-components';

export const ProjectTitleContainer = styled.div`
    display: flex;
    background: #F3F0DF;
    flex-direction: column;
    align-items: center;
    padding: 10px 30px;
    height: 155px;
    position: relative;

    @media screen and (max-width: 768px) {
        height:120px;
        }

    @media screen and (max-width: 480px) {
        height:75px;
        }
`;

export const ProjectTitle = styled.h1`
    color: #E2C81F;
    font-size: 110px;
    text-align: center;

    @media screen and (max-width: 768px) {
    font-size:90px;
    }

    @media screen and (max-width: 480px) {
    font-size:70px;
    }
`;

export const ProjectContainer = styled.div`
    display: flex;
    background: #F3F0DF;
    flex-direction: column;
    padding-left: 30px;
    height: 200px;
    position: relative;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column!important;
        align-items:center;
        }

    @media screen and (max-width: 480px) {
    height:1000px;
    display: flex;
    flex-direction: column!important;
    align-items:center;
    }
`;

export const ExampleTitle = styled.h1`
    color: #E2C81F;
    font-size: 30px;

    @media screen and (max-width: 768px) {
    font-size:30px;
    }

    @media screen and (max-width: 480px) {
    font-size:20px;
    align-items:center;
    }

`;

export const ExampleLink = styled.a`
    padding-top: 20px;
    a:link {
    text-decoration: none;
    font-size: 20px;
    color: #0c0c0c;
    }

    a:hover{
    text-decoration: underline;
    }

    a:visited { 
    text-decoration: none;
    color: #black;
    }

    @media screen and (max-width: 480px) {
    font-size:20px
    }
`;

export const ExampleDesc = styled.p`
    display: flex;
    padding-top: 20px;

`

