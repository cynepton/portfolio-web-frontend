import React from 'react';
import { Header } from '../../components';
import * as ROUTES from '../../constants/routes';
import logo from '../../logo-white.svg';
import navItems from '../../fixtures/navSections.json';

export default function HeaderContainer() {
    return(
        <Header>
            <Header.Logo to={ROUTES.HOME} alt="Isaac Aderonmu" src={logo} />
            <Header.Spacer />
            <Header.Navigation>
                {navItems.map((item) =>(
                    <Header.NavItem href={'#'.concat(item.id)}>{item.name}</Header.NavItem>
                ))}
            </Header.Navigation>
        </Header>
    )
}