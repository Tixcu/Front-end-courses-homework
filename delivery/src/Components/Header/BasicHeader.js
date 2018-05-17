import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {LoginButton} from '../Buttons/Buttons.js';

const Logo = styled(Link)`
    align-items: center;
    max-width: 208px;
    max-height: 64px;
    margin-top: 50px;
    color: #fff;
`

const BlackLogo = styled.img`
    filter: invert(100%);
`

export default class BasicHead extends React.Component {
    render() {
        return (
            <Grid>
                <Row center="xs">
                    <Col lg={3}>
                        <Row center="xs">

                            <Logo to={this.props.destination}>
                                {this.props.black? (<BlackLogo src="img/logowhite.png" alt="Logo" />) : (<img src="img/logowhite.png" alt="Logo" />)}
                            </Logo>
                        </Row>
                    </Col>
                    <Col lg={5}></Col>
                    <Col lg={3}>
                        <Row center="xs">
                            <LoginButton>Вход / Регистрация</LoginButton>
                        </Row>
                    </Col>
                    <Col lg={1} md={0}></Col>
                </Row>
            </Grid>
        );
    }
}