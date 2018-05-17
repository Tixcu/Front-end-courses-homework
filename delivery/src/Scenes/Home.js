import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled, {injectGlobal} from 'styled-components';

import HomeHead from './Home/HomeHeadMask.js';
import BaseFoot from '../Components/BasicFooter/BasicFooter.js';
import StoresList from '../Components/StoresLoader/StoresLoader.js';

import { Header1 } from '../Components/Header/HeaderTextStyles/HeadersStyles.js';
import { MainButton } from '../Components/Buttons/Buttons.js';

import { maxWidth } from '../Components/Utility/UtilMedia.js';

injectGlobal`
    body{
        margin: 0;
        font-family: "Open Sans", sans-serif;
    }
`;

const LeadText = styled.div`
    font-family: "Open Sans", Regular;
    font-size: 18px;
`

const DescriptionCover = styled.img`
    width: 100%;
    ${maxWidth.tablet`display:none;`}
`

export default class Home extends React.Component {

    render() {
        return (
            <main>  
                <HomeHead/>
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
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Header1>Рестораны</Header1>
                        </Col>
                    </Row>
                    <StoresList/>
                    <Row center="xs">
                        <Col xs={12}>
                            <Link to='/catalog' onUpdate={() => window.scrollTo(0, 0)}>
                                <MainButton>Все рестораны</MainButton>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
                <BaseFoot/>
            </main>
        );
    }
}