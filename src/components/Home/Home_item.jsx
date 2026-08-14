import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Change_count_product } from '../Change_count_product/Change_count_product'
import { Context_menu } from '../Context_menu/Context_menu'
import '../products.css'
import { InputEdit } from './InputEdit'
import { SelectEdit } from '../SelectEdit'


export const Home_item = ({ item, id, colors_rd, show_to_backet, backet, to_backet, setTo_backet, remove_product, is_context, setIs_context, isChange}) => {
    return (
        <div className='prod_item' style={{ display: 'flex', gap: '15px', background: colors_rd.productBG }} onContextMenu={(e) => is_context && show_to_backet(e,id)}>


            {/* <InputEdit
                id={item.id}
                keyItem='name'
                data={item.name}
                isChange={isChange} /> */}

            <InputEdit
                id={id}
                keyItem='name'
                data={item.name}
                isChange={isChange} />
{/* 
            <InputEdit
                id={item.id}
                keyItem='price'
                data={item.price} 
                isChange={isChange}/> */}
            <InputEdit
                id={id}
                keyItem='price'
                data={item.price} 
                isChange={isChange}/>


            {/* <InputEdit
                id={item.id}
                keyItem='discount'
                data={item.discount}
                isChange={isChange} /> */}
            <InputEdit
                id={id}
                keyItem='discount'
                data={item.discount}
                isChange={isChange} />

            {/* <SelectEdit
               id={item.id}
               keyItem='category'
               data={item.category}
               isChange={isChange}/> */}
            <SelectEdit
               id={id}
               keyItem='category'
               data={item.category}
               isChange={isChange}/>

            
            {/* {Object.keys(backet).includes(String(item.id)) && <Change_count_product id={item.id} />} */}
            {Object.keys(backet).includes(String(id)) && <Change_count_product id={id} />}


            {is_context && to_backet.open && <Context_menu style={{ position: 'fixed', top: to_backet.top, left: to_backet.left, 
                                                            background: 'grey' }} 
                                                            setTo_backet={setTo_backet} to_backet={to_backet} 
                                                            setIs_context={setIs_context} />}

            <button className='remove_btn' onClick={() => remove_product(item.id)} style={{ background: colors_rd.removeBG }}>
                <p style={{ color: colors_rd.btnText, fontSize: `${colors_rd.btnTextFontSize}px` }}>remove product</p></button>
            {/* <Link to={`/product_info/${item.id}`}>Show full story</Link> */}
            <Link to={`/product_info/${id}`}>Show full story</Link>
        </div>)
}








