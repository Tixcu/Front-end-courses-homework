import React from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal, css} from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { sizes, minWidth, maxWidth } from './UtilMedia.js';

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
export default class BaseFoot extends React.Component {
    render() {
        return (
            <Footer>
                <Grid>
                    <Row between="xs">
                        <Col md={6} xs={12}>
                            <Row center="xs" start="md">
                                <Col>
                                    <FooterTitle>Компания</FooterTitle>
                                    <FooterNavLink>Для курьеров</FooterNavLink>
                                    <FooterNavLink>Партнёрство для ресторанов</FooterNavLink>
                                    <FooterNavLink>Условия проведения акций</FooterNavLink>
                                    <FooterNavLink>Контакты</FooterNavLink>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} xs={12}>
                            <FooterSocialIcons>
                                <a href="#"> {/* try to make template */}
                                    <FooterSocialIcon src="img/ig.png" alt=""/>
                                </a>
                                <a href="#"> {/* try to make template */}
                                    <FooterSocialIcon src="img/vk.png" alt=""/>
                                </a>
                            </FooterSocialIcons>
                            <FooterCopyright> &copy; 2009-2018 Delivery Club&trade;
                                <br/>Все права защищены
                            </FooterCopyright>
                        </Col>
                    </Row>
                </Grid>
            </Footer>
        )
    }
}