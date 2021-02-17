import styled from 'styled-components/macro';
import {
    brandColor1
} from '../../../constants/colorStyles';
import {
    menuItemText,
    menuItemTextHover
} from "../../../constants/textStyles";

export const HeaderFrame = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 32px;
    position: fixed;
    height: 72px;
    top: 0px;
    left: 0px;
    right: 0px;

    background-color: ${props => props.bgColor ? props.bgColor : "none" };
`;

export const HeaderLogo = styled.img`
    height: 42.5px;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    :hover {
        height: 48px;
    }
`;

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    height: 100%;
`;

export const HeaderMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 16px;
    height: 100%;
    cursor: pointer;
`;

export const HeaderMenuText = styled.div`
    font: ${menuItemText};
    padding: 5px 0px;
    border-bottom: ${props => props.isActive ? `4px solid ${brandColor1}` : "4px solid transparent" };
    transition: all 0.1s ease-in-out;

    :hover {
        border-bottom: 4px solid ${brandColor1};
        font: ${menuItemTextHover};
    }
`;
