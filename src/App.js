import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Create_product } from './components/Create_product/Create_product';
import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';



function App() {
  return (
    <div>

      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_product" element={< Create_product />} />
      </Routes>
    </div>
  );
}

export default App;
