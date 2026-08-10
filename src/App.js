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


function App() {
  return (
    <div>

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
      <button>vrfvg</button>
    </div>
  );
}

export default App;
