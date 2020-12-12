import React from 'react';
import { Jumbotron } from '../components';

export default function JumbotronContainer() {
    return (
        <Jumbotron>
            <Jumbotron.Introduction>
                <Jumbotron.IntroText>Hello, I am</Jumbotron.IntroText>
                <Jumbotron.Name>ISAAC <br></br>ADERONMU</Jumbotron.Name>
                <Jumbotron.IntroText>A talented Software Developer and Hardware Engineer</Jumbotron.IntroText>
            </Jumbotron.Introduction>
        </Jumbotron>
    )
}