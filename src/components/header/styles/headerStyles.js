import styled from 'styled-components/macro';
import {
    brandColorPrimary,
    brandColorText
} from './../../../constants/styleConstants';

export const Background = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 50px 16px 32px;
    height: 80px;
    width: 100%;
    position: fixed;
    overflow: hidden;
`;

export const Logo = styled.img`
    height: 45px;
    transition: all 0.1s ease-out;

    &:hover {
        height: 50px;
        content: url('/assets/icons/logo-gradient.svg');
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

    &:hover {
        color: ${brandColorPrimary};
    }
`;

export const Spacer = styled.div`
    flex-basis: 100%;
    height: 40px;
`;
