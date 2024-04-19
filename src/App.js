import './App.css';

import { Routes, Route } from "react-router-dom"
import Pagenotfound from './Components/Pagenotfound';
import Homepage from './Components/Homepage';
import Header from './Components/Header';
import Mencard from './Components/Product/MEN/Mencard';
import Menproductpage from './Components/Product/MEN/Menproductpage';
import Womencard from './Components/Product/Women/Womencard';
import Womenproductpage from './Components/Product/Women/Womenproductpage';
import CartPage from './Components/Product/Women/Cartpage';
import Kidscard from './Components/Product/KIDs/Kidscard';
import Kidsproductpage from './Components/Product/KIDs/Kidsproductpage';
import Beautycard from './Components/Product/BEAUTY/Beautycard';
import Beautyproductpage from './Components/Product/BEAUTY/Beautyproductpage';







function App() {


  return (

    <div>



      <Routes>
        <Route path='/Header' element={<Header />} />

        <Route path='/' element={<Homepage />} />

        <Route path='*' element={<Pagenotfound />} />

        <Route path='Mencard' element={<Mencard />} />        
        <Route path='/Menproductpage/:id' element={<Menproductpage />} />

        <Route path='Womencard' element={<Womencard />} />
        <Route path='/Womenproductpage/:id' element={<Womenproductpage />} />        
        <Route path='/Cartpage' element={<CartPage />} />

        <Route path='Kidscard' element={<Kidscard />} />
        <Route path='/Kidsproductpage/:id' element={<Kidsproductpage />} />
        
        <Route path='Beautycard' element={<Beautycard />} />
        <Route path='/Beautyproductpage/:id' element={<Beautyproductpage />} />
      </Routes>









    </div>

  );
}

export default App;
