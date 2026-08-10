import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllProducts, removeProduct } from '../../store/redux/productReducer'
import '../products.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { Home_item } from './Home_item'



export const Home = () => {
  const list = useSelector(a => a.products.products)
  const backet = useSelector(a => a.backet)
  const colors_rd = useSelector(state => state.settings)
  const[category_edit, setCategory_edit] = useState(null)

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
      {list.map(elem => (<Home_item key={elem.id}
        isChange={true}
        item={elem}
        colors_rd={colors_rd}
        show_to_backet={show_to_backet}
        backet={backet}
        to_backet={to_backet}
        is_context={true}
        setTo_backet={setTo_backet}
        remove_product={remove_product} 
        category_edit={category_edit}
        setCategory_edit={setCategory_edit}/>))}

      < ToastContainer />

      <button className='delete_all_btn' onClick={remove_all} >delete all</button>




    </div>
  )
}




