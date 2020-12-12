import React from 'react';
import {
    Container,
    Introduction,
    Name,
    IntroText
} from './styles/jumbotronStyles';


export default function Jumbotron({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Jumbotron.Introduction = function JumbotronIntroduction({children, ...restProps}) {
    return <Introduction {...restProps}>{children}</Introduction>
}

Jumbotron.Name = function JumbotronName({children, ...restProps}) {
    return <Name {...restProps}>{children}</Name>
}

Jumbotron.IntroText = function JumbotronIntroText({children, ...restProps}) {
    return <IntroText {...restProps}>{children}</IntroText>
}