import './App.css';

import { Routes, Route } from "react-router-dom";
import { UserProvider } from './Components/Login/Usercontext';
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
import Shervanicard from './Components/Product/SHERVANI/Shervanicard';
import Shervaniproductpage from './Components/Product/SHERVANI/Shervaniproductpage';
import Trend from './Components/Homepage/TRENDS/Trend';
import Inter from './Components/Homepage/INTERNATIONAL/Inter';
import Snekr from './Components/Homepage/SNEKERS/Snekr';
import Newbrand from './Components/Homepage/UPCOMINGBRANDS/Newbrand';
import Greet from './Components/Payment/Greet';
import Pay from './Components/Payment/Pay';
import Login from './Components/Login/Login';









function App() {


  return (

    <div>
      <UserProvider>

        <Routes>
          <Route path='/Header' element={<Header />} />

          <Route path='/' element={<Homepage />} />

          <Route path='*' element={<Pagenotfound />} />

          <Route path='Mencard' element={<Mencard />} />
          <Route path='/Menproductpage/:id' element={<Menproductpage />} />

          <Route path='Womencard' element={<Womencard />} />
          <Route path='/Womenproductpage/:id' element={<Womenproductpage />} />
          <Route path='/Cartpage' element={<CartPage />} />
          <Route path='/Login' element={<Login />} />

          <Route path='Kidscard' element={<Kidscard />} />
          <Route path='/Kidsproductpage/:id' element={<Kidsproductpage />} />

          <Route path='Beautycard' element={<Beautycard />} />
          <Route path='/Beautyproductpage/:id' element={<Beautyproductpage />} />

          <Route path='Shervanicard' element={<Shervanicard />} />
          <Route path='/Shervaniproductpage/:id' element={<Shervaniproductpage />} />


          <Route path='/Newbrand' element={<Newbrand />} />
          <Route path='/Trend' element={<Trend />} />
          <Route path='/Inter' element={<Inter />} />
          <Route path='/Snekr' element={<Snekr />} />
          <Route path='/Greet' element={<Greet />} />
          <Route path='/Pay' element={<Pay />} />



        </Routes>

      </UserProvider>

















    </div>

  );
}

export default App;
