import React from 'react';
import Rating from './Rating';
import { link } from 'react-router-dom';

export default function Product(props) {
    const {product}= props
  return (
    <div key={product._id}  className="card">
    <link to= {`/product/${product._id}`}>
     
      <img className="medium" src={product.image} alt={product.name} />
    </link>
    <div className="card-body">
      <link to={`/product/${product._id}`}>
        <h2>{product.name}</h2>
      </link>
      <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
      <div className="price">${product.price}</div>
    </div>
  </div>
  )
}
