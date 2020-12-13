import styled from 'styled-components/macro';
import {
    brandColorPrimary,
    brandColorText,
    brandColorBackground,
} from './../../../constants/styleConstants';

export const Background = styled.header`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 50px 16px 32px;
    height: 80px;
    width: 100%;
    overflow: hidden;

    @media (max-width: 800px) {
        padding: 10px 15px 5px 15px;
        height: 9vh;
    }
`;

export const Logo = styled.img`
    height: 45px;
    transition: all 0.1s ease-out;

    &:hover {
        height: 50px;
        content: url('/assets/icons/logo-gradient.svg');
    }

    @media (max-width: 800px) {
        height: 6vh;
    }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`;

export const NavItem = styled.a`
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 20px 20px 5px 20px;
    text-decoration: none;
    color: ${brandColorText};
    transition: all 0.1s ease-out;

    &:hover {
        color: ${brandColorPrimary};
        font-size: 24px;
    }

    @media (max-width: 800px) {
        display: none;
    }
`;

export const Spacer = styled.div`
    width: 100%;
`;

export const Hamburger = styled.div`
    display: none;
    height: 36px;

    @media (max-width: 800px) {
        display: flex;
        height: 36px;
    }
`;

export const Bottom = styled.div`
    display: none;
    height: 100vh;
    background-color: ${brandColorBackground};
    opacity: 0.95;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Menu = styled.a`
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${brandColorText};
    padding: 10px 0px;
    font-size: 3vh;
    font-weight: 700;
    padding: 4vh 0;
`;
