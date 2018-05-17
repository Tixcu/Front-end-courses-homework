import React from 'react';
import {injectGlobal} from 'styled-components';

import HomeHead from './Home/HomeHeadMask.js';
import HomeInfo from './Home/HomeInfo.js';
import HomeRestorauntMask from './Home/HomeRestorauntLoaderMask.js';
import BaseFoot from '../Components/BasicFooter/BasicFooter.js';

injectGlobal`
    body{
        margin: 0;
        font-family: "Open Sans", sans-serif;
    }
`;

export default class Home extends React.Component {

    render() {
        return (
            <main>  
                <HomeHead/>
                <HomeInfo/>
                <HomeRestorauntMask/>
                <BaseFoot/>
            </main>
        );
    }
}