import styled from 'styled-components/macro';
import * as TEXTSTYLES from '../../../constants/textStyles';
import * as COLORSTYLES from '../../../constants/colorStyles';

export const JumbotronFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 30px;

    position: absolute;
    left: 32px;
    right: 32px;
    top: 144px;
`;

export const JumboTextFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 100%;
`;

export const JumbotronRegularText = styled.p`
    padding: 0px;
    margin: 0px;
    width: 720px;
    font: ${TEXTSTYLES.regularJumboText};
`;

export const JumbotronKingText = styled.p`
    margin: 0px;
    padding: 0px;
    width: 720px;
    color: ${COLORSTYLES.brandColor1};
    font: ${TEXTSTYLES.kingJumboText};
`;

export const JumbotronIconRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    gap: 45px;
    width: 900px;
`;

export const JumbotronIcon = styled.img`
    height: 36px;
`;
