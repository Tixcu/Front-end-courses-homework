import styled from 'styled-components';

import { maxWidth } from '../../Utility/UtilMedia.js';

export const LeadHeader = styled.div`
    font-family: "Pacifico", cursive;
`

export const Header1 = styled.h1`
    margin-top: 50px;
    line-height: 48px;
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 35px;
    text-align: left;
    color: #333333;
`

export const LeadHeader1 = styled(LeadHeader)`
    font-size: 77.32px;
    text-align: left;
    letter-spacing: 2.97px;
    color: #fff;
    margin-top: 5px;
    margin-left: 200px;
    ${maxWidth.desktop`
            margin-top: 96px;
            display: block;
            width: 100%;
            margin-left: 0;
            text-align: center;
            line-height: 84px;
            font-size: 60px;
        `}

`

export const LeadHeader2 = styled(LeadHeader)`
    font-size: 182.75px;
    text-align: left;
    line-height: 37px;
    letter-spacing: 6.49px;
    color: #b7e611;
    margin-left: 260px;
    ${maxWidth.desktop`
            display: block;
            width: 100%;
            margin-left: 0;
            text-align: center;
            line-height: 84px;
            font-size: 100px;
        `}
`