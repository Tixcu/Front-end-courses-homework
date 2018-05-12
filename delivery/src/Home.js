import React from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal, css} from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import BaseFoot from './BaseFooter.js';
import MainButton from './Buttons.js';
import { sizes, minWidth, maxWidth } from './UtilMedia.js';
import LeadHeader from './Headers.js';

injectGlobal`
    body{
        margin: 0;
        font-family: "Open Sans", sans-serif;
    }
`;

const Header = styled.header`
    background-image: url(img/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 75px;
`

const Logo = styled.div`
    align-items: center;
    max-width: 208px;
    max-height: 64px;
    margin-top: 50px;
    color: #fff;
`

const LoginButton = styled(MainButton)`
    margin-top: 63px;
    ${maxWidth.desktop`margin-top: 16px;`}
`

const LeadHeader1 = styled(LeadHeader)`
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

const LeadHeader2 = styled(LeadHeader)`
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

const ButtonAbout = styled(MainButton)`
    margin-top: 192px;
    ${maxWidth.desktop`margin-top:130px;`}
`

const Header1 = styled.h1`
    margin-top: 50px;
    line-height: 48px;
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 35px;
    text-align: left;
    color: #333333;
`

const LeadText = styled.div`
    font-family: "Open Sans", Regular;
    font-size: 18px;
`

const DescriptionCover = styled.img`
    width: 100%;
    ${maxWidth.tablet`display:none;`}
`

const StoreCard = styled.div`
    margin-bottom: 48px;
`

const StoreCardLink = styled.a`
    display: block;
    text-decoration: inherit;
    color: inherit;
`

const StoreCardImage = styled.img`
    width: 100%;
    border-radius: 16px;
`

const StoreCardName = styled.h2`
    margin: 6px 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    color: #333333;
`

const StoreCardText = styled.p`
    margin: 6px 0 0 0;
`

const StoreCardDeliveryInfo = styled.p`
    margin: 0 0 6px 0;
    font-weight: bold;
`

const StoreCardOrderInfo = styled.p`
    margin: 6px 0;
    font-size: 16px;
    line-height: 22px;
`

const StoreCardMinPrice = styled.span`
    margin-left: 0.25em;
    font-weight: bold;
`

const Footer = styled.footer`
    margin-top: 100px;
    padding-bottom: 64px;
    background-color: #333333;
    ${maxWidth.tablet`margin-top: 30px;`}
`

const FooterTitle = styled.h4`
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #999999;
    margin-top: 40px;
    ${minWidth.tablet`text-align: left;`}
`

const FooterNavLink = styled.a`
    text-align: center;
    display: block;
    font-family: "Open Sans", Regular;
    font-size: 18px;
    line-height: 32px;
    text-decoration: underline;
    color: #cccccc;
    &:hover {
        color: #a3d200;
    }
    ${minWidth.tablet`text-align: left;`}
`

const FooterText = styled.p`
    font-size: 18px;
    line-height: 32px;
    text-align: left;
    color: #cccccc;
`

const FooterSocialIcons = styled.div`
    text-align: center;
    ${minWidth.tablet`text-align: right;`}
`

const FooterSocialIcon = styled.img`
    margin-top: 40px;
    margin-left: 15px;
`

const FooterCopyright = styled(FooterText)`
    text-align: center;
    line-height: 24px;
    margin-top: 40px;
    ${minWidth.tablet`text-align: right;`}
`

class Ilpatio extends React.Component {
    render() {
        return (
            <Col lg={3} md={6} xs={12}>
                <StoreCard>
                    <StoreCardLink href="#">
                        <StoreCardImage src="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg" alt=""/>
                        <StoreCardName>Il Patio</StoreCardName>
                        <StoreCardOrderInfo>Заказ от
                        <StoreCardMinPrice>900</StoreCardMinPrice>
                        </StoreCardOrderInfo>
                        <StoreCardText>Доставка</StoreCardText>
                            <StoreCardDeliveryInfo>бесплатно, 90 минут</StoreCardDeliveryInfo>
                    </StoreCardLink>
                </StoreCard>
            </Col>
        )
    }
}

export default class Home extends React.Component {
  render() {
    return (
        <main>
            <Header>
                <Grid>
                    <Row center="xs">
                        <Col lg={3}>
                            <Row center="xs">
                                <Logo>
                                    <img src="img/logowhite.png" alt="Logo" />
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
                <Row around={"xs"}>

                    <Ilpatio/>
                    <Ilpatio/>
                    <Ilpatio/>
                    <Ilpatio/>
                    <Ilpatio/>
                    <Ilpatio/>
                    <Ilpatio/>
                    <Ilpatio/>

                </Row>
                <Row center="xs">
                    <Col xs={12}>
                        <MainButton>Все рестораны</MainButton>
                    </Col>
                </Row>
            </Grid>
            <BaseFoot/>
        </main>
    );
  }
}