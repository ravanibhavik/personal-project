import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Group.css';

const CategoryGroup = () => {
  return (
    <ListGroup className="group">
      <ListGroupItem className="group-item">Electronics (Accessories)</ListGroupItem>
      <ListGroupItem className="group-item">Electronics (Consumer)</ListGroupItem>
      <ListGroupItem className="group-item">Personal Computers</ListGroupItem>
      <ListGroupItem className="group-item">Software & Computer Games</ListGroupItem>
      <ListGroupItem className="group-item">Sports</ListGroupItem>
      <ListGroupItem className="group-item">Outdoors</ListGroupItem>
    </ListGroup>
  )
}

export default CategoryGroup;