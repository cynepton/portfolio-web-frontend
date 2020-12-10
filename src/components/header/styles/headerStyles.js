import styled from 'styled-components/macro';

export const Background = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 50px 16px 32px;
    height: 55px;
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
    width: 100px;
    height: 100%;
`;

export const NavItem = styled.div``;

export const Spacer = styled.div`
    width: 100%;
    height: 100%;
`;
