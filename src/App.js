import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Create_product } from './components/Create_product/Create_product';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { History } from './components/history/History';
import { Backet } from './components/Backet/Backet';
import { Settings } from './components/Settings/Settings';
import { Product_info } from './components/product_info/Product_info';
import { History_more_info } from './components/history_more_info/History_more_info';
import { useEffect, useState } from 'react';


const first_color = JSON.parse(localStorage.getItem('bg_color')) || 'white'

function App() {
  const [bg_color, setBg_color] = useState(first_color)

  useEffect(()=> {
    localStorage.setItem('bg_color', JSON.stringify(bg_color),[bg_color])
  })

  const get_color_part = () => {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');

}
  const randomColor = () => {
    let random_color = '#'
    const r = get_color_part();
    const g = get_color_part();
    const b = get_color_part();
    random_color += r + g + b
    return setBg_color(random_color)
  }

  return (
    <div style={{ background: bg_color, minHeight: "100vh" }}>

      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_product" element={< Create_product />} />
        <Route path="/backet" element={< Backet />} />
        <Route path="/settings" element={< Settings />} />
        <Route path="/product_info/:id" element={<Product_info />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:id" element={<History_more_info />} />
      </Routes>
      <button className='total_change_BG_btn' onClick={randomColor}>change BG</button>
    </div>
  );
}

export default App;
