import React from 'react';
import * as COLORSTYLES from '../../constants/colorStyles';
import {
    HeaderFrame,
    HeaderLogo,
    HeaderMenu,
    HeaderMenuItem,
    HeaderMenuText
} from './styles/headerStyles';

const HeaderComponent = ({children, backgroundColor, ...restProps}) => {
    let bgColor;
    switch (backgroundColor) {
        case "black":
            bgColor = COLORSTYLES.brandColor4;
            break;
        case "dark":
            bgColor = COLORSTYLES.brandColor3;
            break;
        case "white":
            bgColor = COLORSTYLES.brandColor2;
            break;
        default:
            bgColor = "none";
            break;
    }

    return (
        <HeaderFrame bgColor={bgColor} {...restProps} >
            {children}
        </HeaderFrame>
    );
}

HeaderComponent.Logo = ({children, ...restProps}) => {
    return (
        <HeaderLogo {...restProps} >
            {children}
        </HeaderLogo>
    );
}

HeaderComponent.Menu = ({children, ...restProps}) => {
    return (
        <HeaderMenu {...restProps} >
            {children}
        </HeaderMenu>
    );
}

HeaderComponent.MenuItem = ({text, ...restProps}) => {
    return (
        <HeaderMenuItem {...restProps} >
            <HeaderMenuText >
                {text}
            </HeaderMenuText>
        </HeaderMenuItem>
    )
}

export default HeaderComponent;