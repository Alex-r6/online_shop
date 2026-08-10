import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addToBacket } from '../../store/redux/productReducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import backetReducer, { addToNewBacket } from '../../store/redux/backetReducer'


export const Context_menu = ({ style, setTo_backet, to_backet, setIs_context }) => {

  const dispatch = useDispatch()

  const add_to_new_backet = () => {
    dispatch(addToNewBacket(to_backet.id))
    setTo_backet({
      open: false,
      top: null,
      left: null
    })
  }

  return (
    <div
    tabIndex={0}
    autoFocus
    style={style}
    onBlur={() =>
      setTo_backet({
        open: false,
        top: null,
        left: null,
      })
    }
  >
    <p onClick={add_to_new_backet}>Add to basket</p>
    <p onClick={() =>
      setTo_backet({
        open: false,
        top: null,
        left: null,
      })
    }>Cancel</p>
    <ToastContainer />
  </div>
  )
}
