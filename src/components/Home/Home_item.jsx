import React from 'react'
import { Change_count_product } from '../Change_count_product/Change_count_product'
import { Context_menu } from '../Context_menu/Context_menu'

export const Home_item = ({elem, colors_rd, show_to_backet, backet, to_backet, setTo_backet, remove_product}) => {
    return (
        <div  className='prod_item' style={{ display: 'flex', gap: '15px', background: colors_rd.productBG }} onContextMenu={(e) => show_to_backet(e, elem.id)}>
            <p style={{ color: colors_rd.nameColor, fontSize: `${colors_rd.nameFontSize}px` }}>{elem.name}</p>
            <p style={{ color: colors_rd.priceColor, fontSize: `${colors_rd.priceFontSize}px` }}>{elem.price}</p>
            <p style={{ color: colors_rd.categoryColor, font: `${colors_rd.categoryFontSize}px` }}>{elem.category}</p>

            {Object.keys(backet).includes(String(elem.id)) && <Change_count_product id={elem.id} />}

            {to_backet.open && <Context_menu style={{ position: 'fixed', top: to_backet.top, left: to_backet.left, background: 'grey' }} setTo_backet={setTo_backet} to_backet={to_backet} />}

            <button className='remove_btn' onClick={() => remove_product(elem.id)} style={{ background: colors_rd.removeBG }}>remove product</button>
        </div>)
}





