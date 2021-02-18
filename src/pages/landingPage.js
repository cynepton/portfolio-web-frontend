import React from 'react';
import {
    HeaderContainer,
    JumbotronContainer
} from '../containers';
import { HOME } from '../constants/routes';

const LandingPage = (props) => {

    const textList = [
        { text: "Hello, I'm", size: "regular" },
        { text: "ISAAC ADERONMU,", size: "king" },
        { text: "I am full stack developer, product designer, and robotics software engineer.", size: "regular" }
    ];

    return(
        <>
            <HeaderContainer currentPageID={HOME.pageID} />
            <JumbotronContainer
                textList={textList}
            />
        </>
    );
}

export default LandingPage;