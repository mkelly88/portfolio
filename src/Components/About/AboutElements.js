import styled from 'styled-components';

export const AboutTitleContainer = styled.div`
    display: flex;
    background: #0c0c0c;
    flex-direction: column;
    align-items: center;
    padding: 30px 30px;
    height: 175px;
    position: relative;

    @media screen and (max-width: 480px) {
        height:110px;
        }
`;

export const AboutTitle = styled.h1`
    color: #E2C81F;
    font-size: 110px;
    text-align: center;

    @media screen and (max-width: 768px) {
    font-size:90px;
    }

    @media screen and (max-width: 480px) {
    font-size:70px;
    }
`

export const AboutH1 = styled.h2`
    color: #E2C81F;
    font-size: 30px;
    text-align: center;

    @media screen and (max-width: 768px) {
    font-size:20px;
    }

    @media screen and (max-width: 480px) {
    font-size:10px;
    }
`

export const AboutPContainer = styled.div`
    display: flex;
    background: #0c0c0c;
    flex-direction: column;
    align-items: left;
    height: 700px;
    position: relative;
    
`

export const AboutP = styled.p`
    color: #F3F0DF;
    font-size: 20px;
    padding: 70px 100px;
    display:flex;
    align-items: left !important;

    @media screen and (max-width: 768px) {
    font-size:20px;
    padding: 0px 100px;
    }

    @media screen and (max-width: 480px) {
    font-size:15px;
    padding: 10px 100px;
    }
`

export const AboutH3 = styled.h3`
    color: #E2C81F;
    font-size: 25px;
    padding: 35px 100px;
    display:flex;
    align-items: left !important;

    @media screen and (max-width: 768px) {
    font-size:20px;
    padding: 20px 100px;
    }

    @media screen and (max-width: 480px) {
    font-size:15px;
    padding: 40px 100px;
    }
`

export const AboutPEd = styled.p`
    color: #F3F0DF;
    font-size: 20px;
    padding: 20px 100px;
    display:flex;
    align-items: left !important;

    @media screen and (max-width: 768px) {
    font-size:20px;
    padding: 0px 100px;
    }

    @media screen and (max-width: 480px) {
    font-size:15px;
    padding: 10px 100px;
    }
`
