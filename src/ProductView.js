import React from 'react';

const ProductView = (prop) => {
  return (
    <div className="product">
      <div class="product__img"><img src={ prop.product.product_img_src } /></div>
      <div class="product__detail"><p>{ prop.product.product_detail }</p></div>
      <div class="product__rating"><img src={ prop.product.rating_img_src } /></div>
    </div>
  )
}

export default ProductView;