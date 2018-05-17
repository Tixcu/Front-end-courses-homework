import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MainButton } from '../Buttons/Buttons.js';
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
        };
    }

    retrieveStores() {
        this.setState({loading: true});
        fetch(APISTORES + LIMIT + this.state.limit + SHIFT + this.props.offset)
            .then(response => response.json())
            .then(data => this.setState({stores: data.payload.stores, loading: false, first: false, limit: this.state.limit+8}));
    }
  
    componentDidMount() {
        this.retrieveStores();
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

                    <Row around={"xs"}>

                        {stores.map(store => 
                            <StoreCardTemp
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