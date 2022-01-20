import styled from 'styled-components';

export const ContactTitleContainer = styled.div`
    display: flex;
    background: #E2C81F;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    height: 120px;
    text-decoration: none;
    position: relative;

    @media screen and (max-width: 480px) {
        height:90px;
        }
`;

export const ContactTitle = styled.h1`
    color: #F3F0DF;
    font-size: 110px;
    text-decoration: none;
    text-align: center;

    @media screen and (max-width: 768px) {
    font-size:100px;
    }

    @media screen and (max-width: 480px) {
    font-size:70px;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    background: #E2C81F;
    flex-direction: column;
    align-items: center;
    padding: 30px 30px;
    height: 200px;
    text-decoration: none;
    position: relative;

    @media screen and (max-width: 480px) {
        height:170px;
        padding-top:10px;
        }
`;

export const ContactItem = styled.p`
    color: #F3F0DF;
    font-size: 20px;
    text-decoration: none;
`;

export const ContactLink = styled.a`
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
        color: #F3F0DF;
    }

    @media screen and (max-width: 480px) {
        font-size:20px
        }
`

export const ContactSub = styled.h2`
    color:#F3F0DF;
    font-size:50px;
    padding-bottom: 30px;

    @media screen and (max-width: 480px) {
        font-size:30px;
        }
`