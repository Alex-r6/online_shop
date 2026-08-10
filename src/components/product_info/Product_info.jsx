import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export const Product_info = () => {
    const list = useSelector(a => a.products.products)
    const { id } = useParams();
    console.log(id, 'id');
    const product = list.find(elem=>elem.id === id)
  return (
    <div>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
        <p>Discount: {product.discount}</p>
    </div>
  )
}
