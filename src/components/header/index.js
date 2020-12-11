import React from 'react';
import { Link as ReactRouterLink} from 'react-router-dom';
import {
    Background,
    Logo,
    Spacer,
    Navigation,
    NavItem
} from './styles/headerStyles';

export default function Header({children, ...restProps}) {
    return (
        <Background {...restProps}>{children}</Background>
    )
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.Spacer = function HeaderSpacer({...restProps}) {
    return (
        <Spacer {...restProps} />
    )
}

Header.Navigation = function HeaderNavigation({children, ...restProps}) {
    return(
        <Navigation {...restProps}>{children}</Navigation>
    )
}

Header.NavItem = function HeaderNavItem({children, ...restProps}) {
    return(
        <NavItem {...restProps}>
            <div>{children}</div>
        </NavItem>
    )
}
