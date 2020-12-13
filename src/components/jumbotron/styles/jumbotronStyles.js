import styled from 'styled-components/macro';
import { brandColorPrimary } from '../../../constants/styleConstants';

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 150px 60px 60px 20px;
    height: 90vh;

    @media (max-width:800px) {
        padding: 12vh 4px 12px;
    }
`;

export const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const Name = styled.h1`
    display: flex;
    font-size: 120px;
    line-height: 0.85em;
    margin: 0;
    color: ${brandColorPrimary};
    transition: all 0.1s ease-out;

    @media (max-width:800px) {
        font-size: 3.5em;
        line-height: 0.85em;
        text-align: center;
        justify-content: center;
    }
`;

export const IntroText = styled.p`
    display: flex;
    font-weight: 400;
    margin: 0;
    justify-content: center;
    text-align: center;

    @media (min-width:801px) {
        font-size: 30px;
        line-height: 35px;
        text-align: left;
        justify-content: start;
        padding-left: 5px;
    }
`;