import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Header1 } from '../../Components/Header/HeaderTextStyles/HeadersStyles.js';

import { maxWidth } from '../../Components/Utility/UtilMedia.js';

const LeadText = styled.div`
    font-family: "Open Sans", Regular;
    font-size: 18px;
`

const DescriptionCover = styled.img`
    width: 100%;
    ${maxWidth.tablet`display:none;`}
`

export default class HomeInfo extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col lg={6} md={12}>
                        <Header1>Что мы делаем?</Header1>
                        <LeadText>
                            <p>
                                Delivery Club - это независимый клубный проект, объединивший сотни служб доставки еды и продуктов в Единую Систему Заказов.
                            </p>
                            <p>
                                Цель проекта - обеспечить своим пользователям наилучшие условия для быстрого, удобного и выгодного осуществления заказов.
                                Услуги сайта абсолютно бесплатны, а условия доставки очень простые
                            </p>
                        </LeadText>
                    </Col>
                    <Col lg={6} xs={0}>
                        <DescriptionCover src="img/picpizzaaa.jpg"/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}