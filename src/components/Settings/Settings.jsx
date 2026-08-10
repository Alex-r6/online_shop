import React, { useEffect, useState } from 'react'
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCategory, changeColor } from '../../store/redux/settingsReducer';
import '../products.css'
import { Range } from "react-range";
import { Change_category } from '../Change_category';

export const Settings = () => {
    const dispatch = useDispatch()
    const colors_rd = useSelector(state => state.settings)
    const [values, setValues] = useState([10]);
    // const [is_edit, setIs_edit] = useState(false)
    const [settings, setSettings] = useState({
        is_Open: false, title: null, color: null, top: null, left: null, slot: null, font_size: null, bg: null
    })

    const [input_cat_name, setInput_cat_name] = useState('')

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(colors_rd))
    }, [colors_rd])

    const open_menu = (e) => {
        e.preventDefault()
        const title = e.target.title
        let color;
        let fontSize;
        let bg;
        switch (title) {
            case 'name': color = colors_rd.nameColor; fontSize = colors_rd.nameFontSize; break;
            case 'price': color = colors_rd.priceColor; fontSize = colors_rd.priceFontSize; break;
            case 'category': color = colors_rd.categoryColor; fontSize = colors_rd.categoryFontSize; break;
            case 'discount': color = colors_rd.discountColor; fontSize = colors_rd.discountFontSize; break;
            case 'btnText': color = colors_rd.btnText; fontSize = colors_rd.btnTextFontSize; break;
            case 'BG': bg = colors_rd.productBG; break;
            case 'btn_BG': bg = colors_rd.removeBG; break;
        }

        setValues([fontSize ?? 10]);

        setSettings({
            ...settings,
            is_Open: true,
            title,
            color,
            bg,
            font_size: fontSize ?? 10,
            slot: e.target.slot,
            top: e.clientX,
            left: e.clientY
        });

    }


    const change_color = (newColor) => {
        const hex = newColor.hex;

        if (settings.title === 'BG' || settings.title === 'btn_BG') {
            setSettings(prev => ({
                ...prev,
                bg: hex,
            }));
        } else {
            setSettings(prev => ({
                ...prev,
                color: hex,
            }));
        }

    }

    const save_new_color = () => {
        dispatch(changeColor({
            title: settings.title,
            color: settings.color,
            font_size: settings.font_size,
            bg: settings.bg
        }));
        setSettings({ ...settings, is_Open: false })

    };

    const callback_settings = () => {
        setSettings({ ...settings, is_Open: false })
    }

    const getData = (type, typeTitle) => {
        const data = colors_rd[type];
        if (settings.is_Open && typeTitle === settings.title) return settings.color;
        return data
    }


    const getBG = (type, typeTitle) => {
        const data = colors_rd[type];
        if (settings.is_Open && typeTitle === settings.title) return settings.bg;
        return data
    }

    const setValue = (data) => {
        setValues(data)
        setSettings({ ...settings, font_size: data[0] })
    }

    const get_color_part = () => {
        return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');

    }


    const randomColor = () => {
        let random_color = '#'
        const r = get_color_part();
        const g = get_color_part();
        const b = get_color_part();
        random_color += r + g + b

        dispatch(changeColor({
            title: settings.title,
            color: random_color,
            font_size: settings.font_size,
            bg: random_color
        }));

        setSettings({ ...settings, is_Open: false, color: random_color })
    }

    const random_font_size = () => {
        let new_font_size = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
        dispatch(changeColor({
            title: settings.title,
            color: settings.color,
            font_size: new_font_size
        }));
        setSettings({ ...settings, is_Open: false })
    };

    const onInp_Change = (e)=>setInput_cat_name(e.target.value)

    const add_category = () => {
        dispatch(addNewCategory(input_cat_name))
    }

    return (
        <div>
            <div className='prod_item' title="BG" style={{ display: 'flex', gap: '15px', background: getBG('productBG', 'BG') }} onContextMenu={open_menu}>
                <p slot='text' title="name" style={{
                    color: getData('nameColor', 'name'), fontSize: `${settings.is_Open && settings.title === 'name'
                        ? settings.font_size
                        : colors_rd.nameFontSize
                        }px`
                }}>Name</p>
                <p slot='text' title="price" style={{
                    color: getData('priceColor', 'price'), fontSize: `${settings.is_Open && settings.title === 'price'
                        ? settings.font_size
                        : colors_rd.priceFontSize
                        }px`
                }}>00000</p>
                <p slot='text' title="category" style={{
                    color: getData('categoryColor', 'category'), fontSize: `${settings.is_Open && settings.title === 'category'
                        ? settings.font_size
                        : colors_rd.categoryFontSize
                        }px`
                }}>Category</p>
                <p slot='text' title="discount" style={{
                    color: getData('discountColor', 'discount'), fontSize: `${settings.is_Open && settings.title === 'discount'
                        ? settings.font_size
                        : colors_rd.discountFontSize
                        }px`
                }}>Discount</p>


                <button className='remove_btn' title="btn_BG" style={{ background: getBG('removeBG', 'btn_BG') }}>
                    <p title='btnText' slot='text' style={{
                        color: getData('btnText', 'btnText'), fontSize: `${settings.is_Open && settings.title === 'btnText'
                            ? settings.font_size
                            : colors_rd.btnTextFontSize
                            }px`
                    }}>remove product</p></button>

                {settings.is_Open && (
                    <div
                        style={{
                            position: 'fixed',
                            top: settings.top,
                            left: settings.left,
                            zIndex: 1000
                        }}
                    >
                        <button onClick={save_new_color}>save</button>
                        <button onClick={callback_settings}>cancel</button>
                        <button onClick={randomColor}>random color</button>
                        {settings.slot === 'text' && <button onClick={random_font_size}>random font size</button>}

                        <ChromePicker
                            color={settings.title === 'BG' || settings.title === 'btn_BG' ? settings.bg : settings.color}
                            onChange={change_color}
                            styles={{
                                default: {
                                    picker: {
                                        width: '303px'
                                    }
                                }
                            }}
                        />

                        {settings.slot === 'text' &&
                            <Range
                                step={1}
                                min={10}
                                max={50}
                                values={values}
                                onChange={setValue}
                                renderTrack={({ props, children }) => (
                                    <div {...props} style={{ height: "6px", background: "#ccc" }}>
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div {...props} style={{ width: "20px", height: "20px", background: "orange" }}>{values}</div>
                                )}
                            />
                        }
                    </div>
                )}
            </div>
            <div className='line'></div>

            <Change_category/>

            <div>
                <input value={input_cat_name} onChange={onInp_Change}/>
                <button className='add_cat_btn' onClick={add_category}>add category</button>
            </div>
        </div>
    )
}



