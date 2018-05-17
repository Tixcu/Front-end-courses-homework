import styled from 'styled-components';
import { maxWidth } from '../Utility/UtilMedia.js';

export const MainButton = styled.button`
	padding: 12px 32px;
    line-height: 1;
	border: none;
    border-radius: 34.5px;
	opacity: .9;
    color: #fff;
	background-color: #a3d200;
    cursor: pointer;
    outline:none;
	}
	&:hover {
		border-color: #b7e611;
    	opacity: 1;
	}
	&:active {
        border: none;
    }
`

export const GreySubButton = styled(MainButton)`
    margin-right: 5px;
    padding: 5px 30px;
    background-color: #D3D3D3;
    color: black;
    font-weight: bolder;
    font-size: 0.9em;
    opacity: 1;
`

export const LoginButton = styled(MainButton)`
    margin-top: 63px;
    ${maxWidth.desktop`margin-top: 16px;`}
`