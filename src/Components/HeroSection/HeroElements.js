import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const HeroBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: white;
    opacity:0.45;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute:
    padding: 8px 24px;
    display: flex;
    felx-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #E2C81F;
    font-size: 90px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size:70px;
    }

    @media screen and (max-width: 480px) {
        font-size:60px;
    }
`
export const HeroH2 = styled.h2`
    color: #E2C81F;
    font-size: 120px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size:90px;
    }

    @media screen and (max-width: 480px) {
        font-size:65px;
    }
`

export const HeroP = styled.p`
    color: #E2C81F;
    padding-top: 15px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`