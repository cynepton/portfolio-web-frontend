import React from 'react';
import { HeaderComponent } from '../components';
import menuitems from "../fixtures/navSections.json";

const HeaderContainer = ({children, currentPageID, ...restProps}) => {
    return (
        <HeaderComponent {...restProps} >
            <HeaderComponent.Logo
                src="assets/icons/BrandLogoColor=white.svg"
                alt="Isaac Adedoyin Aderonmu"
            />
            <HeaderComponent.Menu>
                {menuitems.map( item => (
                    <HeaderComponent.MenuItem
                        key={item.id}
                        isActive={currentPageID === item.id}
                        text={item.name}
                    />
                ))}
            </HeaderComponent.Menu>
        </HeaderComponent>
    );
}

export default HeaderContainer;
