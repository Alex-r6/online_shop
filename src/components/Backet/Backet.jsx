import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { removeAllBasket, } from '../../store/redux/productReducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
// import { Change_count_product } from '../Change_count_product/Change_count_product'
import { buyFromBacket, delOneProductBacket, removeAllProductsFromBacket } from '../../store/redux/backetReducer'
import { Home_item } from '../Home/Home_item'
import { v4 as uuidv4 } from 'uuid';
import { addToHistory } from '../../store/redux/historyReducer'



export const Backet = () => {
  const backet = useSelector(state => state.backet)
  const list = useSelector(a => a.products.products)
  const colors_rd = useSelector(state => state.settings)
  const dispatch = useDispatch()


  useEffect(() => {
    localStorage.setItem('backet_products', JSON.stringify(backet))
  }, [backet])
  
  
  const remove_all_products = () => {
    dispatch(removeAllProductsFromBacket())
    toast.success('Backet is empty')
  }
  
  const backet_list = [];
  
  for (const elem of list) {
    const elemProduct = backet[elem.id]
    if (elemProduct) {
      const product = { ...elem, quantity: elemProduct.quantity }
      backet_list.push(product)
    }
  
  }
  const ammount = backet_list.reduce((i, elem) => (elem.quantity * elem.price) + i, 0)
  
  const del_product_from_backet = (id) => {
    dispatch(delOneProductBacket(id))
    
  }
  
  const buyProducts = () => {
    const today = new Date();
    dispatch(addToHistory({
      id: uuidv4(),
      globalPrice: ammount,
      date: today.toISOString(),
      product: backet_list.map(elem => ({
        id: elem.id,
        name: elem.name,
        buyPrice: elem.price,
        quantity: elem.quantity
      }))
      
    }))
    dispatch(buyFromBacket())
  }

  return (
    <div className='cont-g-1'>
      {backet_list.map(elem => (<Home_item
        key={elem.id}
        id={elem.id}
        item={elem}
        colors_rd={colors_rd}
        backet={backet} 
        remove_product={del_product_from_backet}
        is_context={false}
        isChange={false}
      />
      ))}

      <button className='delete_all_btn' onClick={remove_all_products}>delete all</button>

      <button className='buy_btn' onClick={buyProducts}>buy</button>
      <p className='total_price'>Total price:{ammount}</p>
      
      <ToastContainer />
    </div>
  )
}
