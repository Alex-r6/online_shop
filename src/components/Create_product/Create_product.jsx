import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from "uuid";
import { addProduct } from '../../store/redux/productReducer';
import '../products.css'
import categories from '../../data/categories.json'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

export const Create_product = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState(-1)

    const dispatch = useDispatch()

    const show_name = (e) => {
        setName(e.target.value)
    }

    const show_price = (e) => {
        setPrice(e.target.value)
    }
    const show_category = (e) => {
        setCategory(e.target.value)
    }

    const add_new_product = () => {
        dispatch(addProduct({
            id : uuidv4(),
            name: name,
            price: price,
            category: category
        }))
        setName('')
        setPrice('')
        setCategory('')
        toast.success('Product was added')
    }

  return (
    <div className='create_prod_cont'>
        <input value={name} placeholder="name" onChange={show_name}/>
        <input value={price} placeholder="price" type="number" onChange={show_price}/>
        <select value={category} onChange={show_category}>
            <option hidden value={-1}>selected categories</option>
            {categories.map((elem)=><option value={elem}>{elem}</option>)}
        </select>

        <ToastContainer />

         <button disabled={name === '' || price === '' || category === -1 ? true : false} onClick={add_new_product}> Add</button> 
    </div>
  )
}

// 
// name === '' price === ''  cate == -1