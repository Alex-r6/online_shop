import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllBasket, removeProductFromBacket } from '../../store/redux/productReducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Change_count_product } from '../Change_count_product/Change_count_product'
import { removeAllProductsFromBacket } from '../../store/redux/backetReducer'


export const Backet = () => {
  // const backet_products = useSelector(a => a.products.backet)
  const backet = useSelector(state => state.backet)
  const dispatch = useDispatch()

  // useEffect(() => {
  //     localStorage.setItem('backet_products', JSON.stringify(backet_products))
  // }, [backet_products])

  


  const remove_product_from_backet = (id) => {
    dispatch(removeProductFromBacket(id))
    toast.success('Product was removed')
  }

  // const remove_all_products = () => {
  //   dispatch(removeAllBasket())
  //   toast.success('Backet is empty')
  // }

  const remove_all_products = () => {
    dispatch(removeAllProductsFromBacket())
    toast.success('Backet is empty')
  }

  // const ammount = backet_products.reduce((i, elem)=> (elem.quantity * elem.price) + i, 0)

  return (
    <div className='cont-g-1'>
      {/* {backet_products.map(elem=><div  className='prod_item' key={elem.id} style={{display:'flex', gap: '15px'}}>
            <p>Name: {elem.name}</p>
            <p>Price: {elem.price}</p>
            <p>Category: {elem.category}</p>
            <p>Quantity: {elem.quantity}</p>
            <button className='remove_btn' onClick={()=>remove_product_from_backet(elem.id)}>remove product</button>

            <Change_count_product id={elem.id}/>
        </div>)} */}
      {/* {!!ammount && <p className='total_price'>Total price: {ammount}</p>} */}

      {Object.entries(backet).map(([id, item]) => (
        <div className='prod_item' key={id}>
          <p>ID: {id}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}

      <button className='delete_all_btn' onClick={remove_all_products}>delete all</button>

      <ToastContainer />
    </div>
  )
}
