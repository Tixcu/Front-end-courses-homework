import React from 'react';

import CatalogHead from './StoresCatalog/CatalogHeaderMask.js';
import BaseFoot from '../Components/BasicFooter/BasicFooter.js';


export default class StoresCatalog extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <main>
                <CatalogHead/>
                <BaseFoot/> 
            </main>
        )
    }
}