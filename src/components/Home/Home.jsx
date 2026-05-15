import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllProducts, removeProduct } from '../../store/redux/productReducer'
import { Context_menu } from '../Context_menu/Context_menu'
import '../products.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'



export const Home = () => {
  const list = useSelector(a => a.products.products)
  const dispatch = useDispatch()
  const [to_backet, setTo_backet] = useState({ open: false, top: null, left: null, id: null })

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(list))
  }, [list])

  const show_to_backet = (e, id) => {
    e.preventDefault()
    setTo_backet({ ...to_backet, open: true, top: e.clientY, left: e.clientX, id: id })
  }

  const remove_product = (id) => {
    dispatch(removeProduct(id))
    toast.success('Product was removed')
  }

  const remove_all = () => {
    dispatch(removeAllProducts())
    toast.success('Product list is empty')
  }

  return (
    <div className='cont-g-1'>
      {list.map(elem => <div key={elem.id} className='prod_item' onContextMenu={(e) => show_to_backet(e, elem.id)} style={{ display: 'flex', gap: '15px' }}>
        <p>Name: {elem.name}</p>
        <p>Price: {elem.price}</p>
        <p>Category: {elem.category}</p>
        <button className='remove_btn' onClick={()=>remove_product(elem.id)}>remove product</button>
      </div>)}

      <ToastContainer />

      <button className='delete_all_btn' onClick={remove_all}>delete all</button>

      {to_backet.open && <Context_menu style={{ position: 'fixed', top: to_backet.top, left: to_backet.left, background: 'grey' }} setTo_backet={setTo_backet} to_backet={to_backet} />}

    </div>
  )
}
