import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import StoresList from '../../Components/StoresLoader/StoresLoader.js';

import { Header1 } from '../../Components/Header/HeaderTextStyles/HeadersStyles.js';
import { MainButton } from '../../Components/Buttons/Buttons.js';


export default class HomeRestorauntMask extends React.Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Header1>Рестораны</Header1>
                    </Col>
                </Row>
                <StoresList resizable/>
                <Row center="xs">
                    <Col xs={12}>
                        <Link to='/catalog' onUpdate={() => (window.scrollTo(0, 0))}>
                            <MainButton>Все рестораны</MainButton>
                        </Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}