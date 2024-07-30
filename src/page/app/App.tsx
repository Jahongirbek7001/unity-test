import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Overview from '../Overview/Overview';
import Products from '../Products/Products';
import Campaigns from '../Campaigns/Campaigns';
import MobileMenu from '../../components/MobileMenu';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Overview />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/products' element={<Products />} />
            <Route path='/campaigns' element={<Campaigns />} />
            <Route path='/mobileMenu' element={<MobileMenu />} />
          </Routes>
        </BrowserRouter>
      </div>;
    </>
  );
}

export default App;

