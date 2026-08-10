import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory } from '../store/redux/settingsReducer'

export const Change_category = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state=> state.settings.categories)

    useEffect(()=>{
        localStorage.setItem('categories', JSON.stringify(categories))
    },[categories])


    const del_category = (elem)=>{
        console.log(elem);
        dispatch(deleteCategory(elem))
    }

    return (
        <div className='change_category_cont'>
            {categories.map((elem, id) =>
                <div  className='category_item' key={id}>
                    <p>{elem}</p>
                    <button className='delete_categort_btn' onClick={()=>del_category(elem)}>X</button>
                </div>)}
        </div>
    )
}
