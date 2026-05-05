import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {
const list = useSelector(a=>a.products.products)
console.log(list);

  return (
    <div>

    </div>
  )
}
