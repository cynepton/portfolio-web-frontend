import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo-white.svg';
import navItems from '../fixtures/navSections.json';

export default function HeaderContainer() {
    return(
        <Header>
            <Header.Top>
                <Header.Logo to={ROUTES.HOME} alt="Isaac Aderonmu" src={logo} />
                <Header.Spacer />
                <Header.Navigation>
                    {navItems.map((item) =>(
                        <Header.NavItem href={'#'.concat(item.id)}>{item.name}</Header.NavItem>
                    ))}
                    <Header.Hamburger></Header.Hamburger>
                </Header.Navigation>
            </Header.Top>
            <Header.Bottom>
                {navItems.map((item) => (
                    <Header.Menu href={'#'.concat(item.id)}>{item.name}</Header.Menu>
                ))}
            </Header.Bottom>
        </Header>
    )
}