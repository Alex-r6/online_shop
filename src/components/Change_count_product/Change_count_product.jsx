import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minusOneProductBacket, plusOneProductBacket } from '../../store/redux/backetReducer'
import { addOneCount, minusOneCount } from '../../store/redux/productReducer'
import '../products.css'

export const Change_count_product = ({id}) => { // q1
    
    const dispatch = useDispatch()
    // const backet_products = useSelector(a => a.products.backet); // []
    const backet = useSelector(a => a.backet); 
    
    // console.log(backet);// []

    // const product = backet_products.find((el) => el.id === id);
    // if(!product) return <></>
    // console.log(product);
    
    // const plus_one_product = () =>{
    //   dispatch(addOneCount(id))
    // }
    
    const plus_one_product = () =>{
      dispatch(plusOneProductBacket(id))
    }
    
    // const minus_one_product = ()=> {
    //     dispatch(minusOneCount(id))
    // }

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
