import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllProducts, removeProduct } from '../../store/redux/productReducer'
import { Context_menu } from '../Context_menu/Context_menu'
import '../products.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Change_count_product } from '../Change_count_product/Change_count_product'
import { Home_item } from './Home_item'



export const Home = () => {
  const list = useSelector(a => a.products.products)
  // const backet_list = useSelector(a => a.products.backet)
  const backet = useSelector(a => a.backet)
  const colors_rd = useSelector(state => state.settings)

  const dispatch = useDispatch()

  const [to_backet, setTo_backet] = useState({ open: false, top: null, left: null, id: null })

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(list))
  }, [list])

  useEffect(() => {
    localStorage.setItem('backet_products', JSON.stringify(backet))
  }, [backet])

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
      {/* {list.map(elem => <div key={elem.id} className='prod_item' style={{ display: 'flex', gap: '15px', background: colors_rd.productBG }} onContextMenu={(e) => show_to_backet(e, elem.id)}>
        <p style={{ color: colors_rd.nameColor, fontSize: `${colors_rd.nameFontSize}px` }}>{elem.name}</p>
        <p style={{ color: colors_rd.priceColor, fontSize: `${colors_rd.priceFontSize}px` }}>{elem.price}</p>
        <p style={{ color: colors_rd.categoryColor, font: `${colors_rd.categoryFontSize}px` }}>{elem.category}</p>

        {Object.keys(backet).includes(String(elem.id)) && <Change_count_product id={elem.id} />}
       
        {to_backet.open && <Context_menu style={{ position: 'fixed', top: to_backet.top, left: to_backet.left, background: 'grey' }} setTo_backet={setTo_backet} to_backet={to_backet} />}

        <button className='remove_btn' onClick={() => remove_product(elem.id)} style={{ background: colors_rd.removeBG }}>remove product</button>
      </div>)}

      <ToastContainer />

      <button className='delete_all_btn' onClick={remove_all} >delete all</button> */}
      {list.map(elem => (<Home_item key={elem.id}
        elem={elem}
        colors_rd={colors_rd}
        show_to_backet={show_to_backet}
        backet={backet}
        to_backet={to_backet}
        setTo_backet={setTo_backet}
        remove_product={remove_product} />))}

      < ToastContainer />

      <button className='delete_all_btn' onClick={remove_all} >delete all</button>




    </div>
  )
}
