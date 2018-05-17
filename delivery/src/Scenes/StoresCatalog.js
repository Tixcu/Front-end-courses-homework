import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import BasicHead from '../Components/Header/BasicHeader.js'
import BaseFoot from '../Components/BasicFooter/BasicFooter.js';
import StoreList from '../Components/StoresLoader/StoresLoader.js';

import GreyLine from './StoresCatalog/GreyLine.js';
import { Header1 } from '../Components/Header/HeaderTextStyles/HeadersStyles.js';

export default class StoresCatalog extends React.Component {
	render() {
		return(
			<main>
				<header>
					<BasicHead black destination="/"/>
		            <GreyLine/>
				</header>
				<Grid>
					<Row center="xs">
                        <Col xs={12}>
                            <Header1>Рестораны</Header1>
                        </Col>
                    </Row>
                 	<StoreList btn/>
				</Grid>
				<BaseFoot/>	
			</main>
		)
	}
}