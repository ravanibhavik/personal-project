import './App.css';
import TopNav from './TopNav';
import TopMenu from './TopMenu';
import products from './products';
import PriceGroup from './PriceGroup';
import React, { Component } from 'react';
import CarouselView from './CarouselView';
import CategoryGroup from './CategoryGroup';
import ProductListView from './ProductListView';
import { Grid, Col, Row } from 'react-bootstrap';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      products: products
    }
  }

  render() {
    console.log(this.state.products);
    return (
      <Grid>
        <Row>
          <TopNav />
        </Row>
        <Row>
          <TopMenu />
        </Row>
        <Row>
          <CarouselView />
        </Row>
        <Row>
          <Col md={3} sm={3} className="byCategory">
            <h4>Shop By Category</h4>
            <CategoryGroup />
            <h4>Refine By Price</h4>
            <PriceGroup className="priceGroup" />
          </Col>
          <Col md={9} sm={9} className="right-view">
            <ProductListView products={ this.state.products } />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;