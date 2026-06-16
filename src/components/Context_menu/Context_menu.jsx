import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addToBacket } from '../../store/redux/productReducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { addToNewBacket } from '../../store/redux/backetReducer'


export const Context_menu = ({ style, setTo_backet, to_backet }) => {

  const dispatch = useDispatch()

  // const add_to_backet = () =>{
  //     setTo_backet({
  //         open: false,
  //         top: null,
  //         left: null,
  // dispatch(addToBacket(to_backet.id))
  // toast.success('Product was added to backet')
  //     })

  const add_to_new_backet = () => {
    dispatch(addToNewBacket(to_backet.id))
    setTo_backet({
      open: false,
      top: null,
      left: null
    })
  }

  return (
    <div style={style}>
      {/* <p onClick={add_to_backet}>add to backet</p> */}
      <p onClick={add_to_new_backet}>add to backet</p>

      <ToastContainer />
    </div>
  )
}
