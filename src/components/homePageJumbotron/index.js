import { React } from "react";
import {
    JumboTextFrame,
    JumbotronFrame,
    JumbotronIcon,
    JumbotronIconRow,
    JumbotronKingText,
    JumbotronRegularText
} from './styles/LPJumbotronStyles';

const JumbotronLP = ({children, ...restProps}) => {

    return (
        <JumbotronFrame {...restProps} >
            {children}
        </JumbotronFrame>
    );
}

JumbotronLP.TextFrame = ({children, ...restProps}) => {
    return (
        <JumboTextFrame {...restProps} >
            {children}
        </JumboTextFrame>
    );
}

JumbotronLP.Paragraph = ({textObject, ...restProps}) => {

    // Define Text Paragraph
    let TextParagraph;

    // Select Text type depending on Text
    switch (textObject.size) {
        case "king":
            TextParagraph = JumbotronKingText;
            break;
        case "regular":
            TextParagraph = JumbotronRegularText;
            break;
        default:
            TextParagraph = null;
            break;
    }

    return (
        TextParagraph ?
        <TextParagraph {...restProps}>
            {textObject.text}
        </TextParagraph> :
        <></>
    );
}

JumbotronLP.IconRow = ({children, ...restProps}) => {
    return (
        <JumbotronIconRow {...restProps} >
            {children}
        </JumbotronIconRow>
    );
}

JumbotronLP.Icon = ({src, alt, ...restProps}) => {
    return (
        <JumbotronIcon
            src={src}
            alt={alt}
            {...restProps}
        />
    );
}

export default JumbotronLP;
