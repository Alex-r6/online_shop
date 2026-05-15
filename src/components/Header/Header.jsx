import React from 'react'

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/create_product">Create product</Link>
        <Link to="/backet">Backet</Link>
    </div>
  )
}
