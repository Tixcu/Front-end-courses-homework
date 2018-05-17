import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import BasicHead from '../../Components/Header/BasicHeader.js';

import { MainButton } from '../../Components/Buttons/Buttons.js';
import { LeadHeader1, LeadHeader2 } from '../../Components/Header/HeaderTextStyles/HeadersStyles.js';

import { maxWidth } from '../../Components/Utility/UtilMedia.js';

const Header = styled.header`
    background-image: url(img/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 75px;
`

const ButtonAbout = styled(MainButton)`
    margin-top: 192px;
    ${maxWidth.desktop`margin-top:130px;`}
`

export default class HomeHead extends React.Component {
    render() {
        return(
            <Header>
                <BasicHead destination="/catalog"/>
                <Grid>
                    <Row center="xs">
                        <Col xs={12}>
                            <LeadHeader1>Меняйте баллы</LeadHeader1>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={12}>
                            <LeadHeader2>на призы</LeadHeader2>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={12}>
                            <ButtonAbout>Подробнее</ButtonAbout>
                        </Col>
                    </Row>
                </Grid>
            </Header>
        )
    }
}