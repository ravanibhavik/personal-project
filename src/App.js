import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';
import TopNav from './TopNav';
import TopMenu from './TopMenu';
import CarouselView from './CarouselView';
import CategoryGroup from './CategoryGroup';
import PriceGroup from './PriceGroup';

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
          </Col>
        </Row>
        <Row className="byPrice">
          <Col md={3} sm={3}>
            <h4>Refine By Price</h4>
            <PriceGroup />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;