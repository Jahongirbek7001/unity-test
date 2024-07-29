import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Overview from '../Overview/Overview';
import Products from '../Products/Products';
import Campaigns from '../Campaigns/Campaigns';

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
          </Routes>
        </BrowserRouter>
      </div>;
    </>
  );
}

export default App;

