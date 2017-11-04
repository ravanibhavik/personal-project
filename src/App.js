import './App.css';
import TopNav from './TopNav';
import TopMenu from './TopMenu';
import PriceGroup from './PriceGroup';
import React, { Component } from 'react';
import CarouselView from './CarouselView';
import CategoryGroup from './CategoryGroup';
import { Grid, Col, Row } from 'react-bootstrap';

class App extends Component {
  
  render() {
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
        <Row className="byCategory">
          <Col md={3} sm={3}>
            <h4>Shop By Category</h4>
            <CategoryGroup />
            <h4>Refine By Price</h4>
            <PriceGroup className="priceGroup" />
          </Col>
          <Col md={9} sm={9}>
            <ProductListView />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;