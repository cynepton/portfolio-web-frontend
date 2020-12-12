import React, { useState, useContext, createContext } from 'react';
import { Link as ReactRouterLink} from 'react-router-dom';
import {
    Background,
    Top,
    Bottom,
    Logo,
    Spacer,
    Navigation,
    NavItem,
    Hamburger,
    Menu
} from './styles/headerStyles';

const ToggleMenuContext = createContext(false)

export default function Header({children, ...restProps}) {
    const [ toggleShowMenu, setToggleShowMenu ] = useState(false);
    return (
        <ToggleMenuContext.Provider value={{toggleShowMenu, setToggleShowMenu}}>
            <Background {...restProps}>{children}</Background>
        </ToggleMenuContext.Provider>
    )
}

Header.Top = function HeaderTop({children, ...restProps}) {
    return(
        <Top {...restProps}>{children}</Top>
    )
}

Header.Bottom = function HeaderBottom({children, ...restProps}) {
    const { toggleShowMenu } = useContext(ToggleMenuContext)
    return(
        toggleShowMenu ? <Bottom {...restProps}>{children}</Bottom> : null
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

Header.Hamburger = function HeaderHamburger({...restProps}) {
    const { toggleShowMenu, setToggleShowMenu } = useContext(ToggleMenuContext);
    return(
        <Hamburger onClick={()=> setToggleShowMenu((toggleShowMenu) => !toggleShowMenu)} {...restProps}>
            {/*<pre>{JSON.stringify(toggleShowMenu, null, 2)}</pre>*/}
            {toggleShowMenu ? (
                <img src="/assets/icons/icon-closeMenu.svg" alt="Close" />
            ) : (
                <img src="/assets/icons/icon-hamburger.svg" alt="Open" />
            )}
        </Hamburger>
    )
}

Header.Menu = function HeaderMenu({ children, ...restProps }) {
    return (
        <Menu {...restProps}>
            <div>{children}</div>
        </Menu>
    )
}