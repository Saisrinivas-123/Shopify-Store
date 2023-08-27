//@ts-ignore
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import { Suspense } from 'react';
import FullScreenLoader from './utilities/FullScreenLoader';
import Cart from './components/Cart/Cart';
import './App.css';
import Mobles from './components/Categories/Mobiles';
import Fashion from './components/Categories/Fashion';
import Electronics from './components/Categories/Electronics';
import Furniture from './components/Categories/Furniture';
import Appliances from './components/Categories/Appliances';
import Beauty from './components/Categories/Beauty';
import Toys from './components/Categories/Toys';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<FullScreenLoader isLoading={false} />}>
            <Home />
          </Suspense>
        }>
        </Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='mobile' element={<Mobles />}></Route>
        <Route path='fashion' element={<Fashion />}></Route>
        <Route path='electronics' element={<Electronics />}></Route>
        <Route path='furniture' element={<Furniture />}></Route>
        <Route path='appliances' element={<Appliances />}></Route>
        <Route path='beauty' element={<Beauty />}></Route>
        <Route path='toys' element={<Toys />}></Route>
      </Routes>
    </div>
  );
}

export default App;
