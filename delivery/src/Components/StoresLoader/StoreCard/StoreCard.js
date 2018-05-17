import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { GreySubButton } from '../../Buttons/Buttons.js';

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
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    color: #333333;
`

export default class StoreCardTemp extends React.Component {
    render() {
        return (
            <Col lg={3} md={6} xs={12} key={this.props.storename}>
                <StoreCard>
                    <StoreCardLink href="#">

                        <StoreCardImage src={this.props.imgSrc}/>
                        <StoreCardName> { this.props.storename } </StoreCardName>

                        <p>{([].concat(this.props.tags.map(name => name.name))).join(', ')}</p> 

                        <Row>
                            <Col>
                                <GreySubButton>{ this.props.priceLevel }</GreySubButton>
                            </Col>
                            <Col>
                                <GreySubButton>{ this.props.eta.min }-{ this.props.eta.max } минут</GreySubButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {this.props.alcoholAvailibity ? 
                                    ( <GreySubButton>Алкоголь</GreySubButton> ) : 
                                    ( <span/>) 
                                }
                            </Col>
                        </Row>

                    </StoreCardLink>
                </StoreCard>
            </Col>
            )
    }
}