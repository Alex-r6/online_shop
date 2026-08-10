import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveEditItem } from '../../store/redux/productReducer'

export const InputEdit = ({ id, keyItem, data, isChange }) => {
    const dispatch = useDispatch()
    const colors_rd = useSelector(state => state.settings)
    const [input, setInput] = useState(data)
    const [isEdit, setIsEdit] = useState(false)

    const onChange = (e) => setInput(e.target.value)
    const onSave = () => {
        dispatch(saveEditItem({
            id: id,
            key: keyItem,
            data: input
        }))
        setIsEdit(false)
    }


    return (
        <div>
            {isEdit
                ? <input
                    onBlur={onSave}
                    autoFocus
                    value={input}
                    onChange={onChange}
                    className='edit_input'
                />
                : <p
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
                </p>}
        </div>
    )
}


// const s = {}
// s.a 
// s['Hello return']