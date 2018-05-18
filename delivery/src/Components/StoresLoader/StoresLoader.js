import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MainButton, ResizeBtnMiddle, ResizeBtnStart, ResizeBtnEnd } from '../Buttons/Buttons.js';
import Loader from '../Utility/Preloader.js';
import StoreCardTemp from './StoreCard/StoreCard.js';

const APISTORES = "https://itc-web1-server.now.sh/stores";
const LIMIT = "?limit=";
const SHIFT = "&offset=";


export default class StoresList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initSize: 8,
            stores: [],
            loading: true,
            first: true,
            limit: 8,
            more: 8,
        };
    }

    retrieveStores() {
        this.setState({loading: true});
        fetch(APISTORES + LIMIT + this.state.limit + SHIFT + this.props.offset)
            .then(response => response.json())
            .then(data => this.setState({stores: data.payload.stores, loading: false, first: false, limit: this.state.limit+this.state.more}));
    }
  
    componentDidMount() {
        this.retrieveStores();
    }

    resize(num) {
        this.setState({
            limit: num, more: num
        }, () => {
            this.retrieveStores();
        });
    }

    render() {

        const stores = this.state.stores;
        const loading = this.state.loading;
        const firstTimer = this.state.first;

        if (loading && firstTimer) {
            return (
                    <Loader>Loading...</Loader>
                )

        } else {

            return (
                <Grid>

                    {this.props.resizable? 
                        (
                            <Grid start="xs">
                                <Row>
                                    <Col>
                                        <ResizeBtnStart onClick={this.resize.bind(this, 4)}>4</ResizeBtnStart>
                                    </Col>
                                    <Col>
                                        <ResizeBtnMiddle onClick={this.resize.bind(this, 8)}>8</ResizeBtnMiddle>
                                    </Col>
                                    <Col>
                                        <ResizeBtnMiddle onClick={this.resize.bind(this, 16)}>16</ResizeBtnMiddle>
                                    </Col>
                                    <Col>
                                        <ResizeBtnEnd onClick={this.resize.bind(this, 24)}>24</ResizeBtnEnd>
                                    </Col>
                                </Row>
                                <br/>
                            </Grid>
                        ) : (<span/>)
                    }

                    <Row around={"xs"}>

                        {stores.map(store => 
                            <StoreCardTemp
                                key = {store.title}
                                imgSrc = {store.heroImageUrl}
                                storename = {store.title}
                                tags = {store.categories}
                                priceLevel = {store.priceBucket}
                                eta = {store.etaRange}
                                alcoholAvailibity = {store.alcohol}
                            />
                        )}

                    </Row>

                    {this.props.btn? 
                                    (
                                    <Row center="xs">
                                        <Col xs={12}>
                                            <MainButton onClick={this.retrieveStores.bind(this)}>{this.state.loading? ("Загрузка..") : ("Больше")}</MainButton>
                                        </Col>
                                    </Row>
                                    )  : (<br/>)
                    }

                </Grid>
            );

        }
    }
}