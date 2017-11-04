import React from 'react';
import ProductView from './ProductView';
import './ProductListView.css';

const ProductListView = (props) => {
  return (
    <div className="productlist">
      {
        props.products.map((product) => {
          return (
            <ProductView product={ product } />
          )
        })
      }
    </div>
  )
}

export default ProductListView;