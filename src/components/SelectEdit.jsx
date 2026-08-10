import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveEditItem } from '../store/redux/productReducer'

export const SelectEdit = ({ id, keyItem, data, isChange}) => {
    const dispatch = useDispatch()
    const colors_rd = useSelector(state => state.settings)
    const categories = useSelector(state=> state.settings.categories)
    const [select_data, setSelect_data] = useState(data)
    const [isEdit, setIsEdit] = useState(false)

    const onChange = (e) => setSelect_data(e.target.value)

    const onSave = () => {
        dispatch(saveEditItem({
            id: id,
            key: keyItem,
            data: select_data 
        }))
        setIsEdit(false)
    }


    return (
        <div>
            {isEdit ? (
                <select value={select_data} onChange={onChange} onBlur={onSave} autoFocus>
                    <option hidden={true}>select new category</option>
                    {categories.map(item => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            ) : (
                <p
                    onDoubleClick={() =>{
                        if(isChange){
                            setIsEdit(true)
                        }
                    }}
                    style={{
                        color: colors_rd[keyItem + 'Color'],
                        fontSize: `${colors_rd[keyItem + 'FontSize']}px`,
                    }}
                >
                    {data}
                </p>
            )}
        </div>
    )
}
