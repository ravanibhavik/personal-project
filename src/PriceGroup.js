import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Group.css';

const PriceGroup = () => {
  return (
    <ListGroup className="group">
      <ListGroupItem className="group-item">$0.00 - $10.00</ListGroupItem>
      <ListGroupItem className="group-item">$10.00 - $19.00</ListGroupItem>
      <ListGroupItem className="group-item">$19.00 - $27.00</ListGroupItem>
      <ListGroupItem className="group-item">$27.00 - $36.00</ListGroupItem>
    </ListGroup>
  )
}

export default PriceGroup;