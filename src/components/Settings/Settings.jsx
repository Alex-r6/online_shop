import React, { useEffect, useState } from 'react'
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../../store/redux/settingsReducer';

import { Range } from "react-range";



export const Settings = () => {
    const dispatch = useDispatch()
    const colors_rd = useSelector(state => state.settings)
    const [values, setValues] = useState([10]);
    const [settings, setSettings] = useState({
        is_Open: false, title: null, color: null, top: null, left: null, slot: null, font_size: null
    })


    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(colors_rd))
    }, [colors_rd])

    const open_menu = (e) => {
        e.preventDefault()
        const title = e.target.title
        let color;
        let fontSize;
        switch (title) {
            case 'name': color = colors_rd.nameColor; fontSize = colors_rd.nameFontSize; break;
            case 'price': color = colors_rd.priceColor; fontSize = colors_rd.priceFontSize; break;
            case 'category': color = colors_rd.categoryColor; fontSize = colors_rd.categoryFontSize; break;
            case 'BG': color = colors_rd.productBG; break;
            case 'btn_BG': color = colors_rd.removeBG; break;
        }

        setValues([fontSize ?? 10]);

        setSettings({
            ...settings,
            is_Open: true,
            title,
            color,
            font_size: fontSize ?? 10,
            slot: e.target.slot,
            top: e.clientX,
            left: e.clientY
        });

    }


    const change_color = (newColor) => {
        const hex = newColor.hex;

        setSettings(prev => ({
            ...prev,
            color: hex,
        }));

    }

    const save_new_color = () => {
        dispatch(changeColor({
            title: settings.title,
            color: settings.color,
            font_size: settings.font_size
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
            font_size: settings.font_size
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


    return (
        <div className='prod_item' title="BG" style={{ display: 'flex', gap: '15px', background: getData('productBG', 'BG') }} onContextMenu={open_menu}>
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

            <button className='remove_btn' title="btn_BG" style={{ background: getData('removeBG', 'btn_BG') }}>remove product</button>

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
                    <button onClick={random_font_size}>random font size</button>

                    <ChromePicker
                        color={settings.color}
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
                            step={3}
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
        </div>)

}

