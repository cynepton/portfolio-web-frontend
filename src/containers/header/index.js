import React from 'react';
import { Header } from '../../components';
import * as ROUTES from '../../constants/routes';
import logo from '../../logo-white.svg'

export default function HeaderContainer() {
    return(
        <Header>
            <Header.Logo to={ROUTES.HOME} alt="Isaac Aderonmu" src={logo} />
            <Header.Spacer />
            <Header.Navigation>Navigate</Header.Navigation>
        </Header>
    )
}