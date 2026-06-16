import React from 'react'
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";
export const Header = () => {
  // const backet_products = useSelector(a=>a.products.backet)
  const backet = useSelector(state=>state.backet)

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/create_product">Create product</Link>
        <Link to="/backet">Backet({Object.keys(backet).length})</Link>
        <Link to="/settings">Settings</Link>
    </div>
  )
}
