import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minusOneProductBacket, plusOneProductBacket } from '../../store/redux/backetReducer'
import { addOneCount, minusOneCount } from '../../store/redux/productReducer'
import '../products.css'

export const Change_count_product = ({id}) => { 
    
    const dispatch = useDispatch()
    const backet = useSelector(a => a.backet); 
  
    
    const plus_one_product = () =>{
      dispatch(plusOneProductBacket(id))
    }

    const minus_one_product = ()=> {
        dispatch(minusOneProductBacket(id))
    }

  return (
    <div className='change_count_cont'>
        <button onClick={plus_one_product}>+</button>
        <p>Quantity:{backet[id].quantity}</p>
        <button onClick={minus_one_product}>-</button>
    </div>
  )
}
