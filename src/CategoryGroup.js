import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Group.css';

const CategoryGroup = () => {
  return (
    <ListGroup className="group">
      <ListGroupItem className="group-item">Scarfs</ListGroupItem>
      <ListGroupItem className="group-item">Training</ListGroupItem>
      <ListGroupItem className="group-item">Fashion</ListGroupItem>
      <ListGroupItem className="group-item">Gifts & Souvenirs</ListGroupItem>
    </ListGroup>
  )
}

export default CategoryGroup;