import React from 'react';
import { LandingPageJumbotron } from '../components';
import iconList from '../fixtures/socialPlatforms.json';

const JumbotronContainer = ({textList, ...restProps }) => {

    return (
        <LandingPageJumbotron {...restProps} >
            { textList.map( textObject => (
                <LandingPageJumbotron.Paragraph
                    key={`jumbotrontext${textList.indexOf(textObject)}`}
                    textObject={textObject}
                />
            ))}
            <LandingPageJumbotron.IconRow>
                {iconList.map(icon => (
                    <LandingPageJumbotron.Icon
                        key={icon.id}
                        src={icon.iconPath}
                        alt={icon.name}
                    />
                ))}
            </LandingPageJumbotron.IconRow>
        </LandingPageJumbotron>
    );
}

export default JumbotronContainer;
