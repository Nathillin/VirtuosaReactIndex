import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Inicio from './pages/Inicio';
import TipsM from './pages/TipsM';
import TipsRp from './pages/TipsR';
import Nosotros from './pages/Nosotros';
import Contact from './pages/Contacto';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
    
      <Route path='/VirtuosaReactIndex/' element={<Inicio />} ></Route>
      <Route path='/tips-maquillaje' element={<TipsM />}></Route>
      <Route path='/tips-ropa' element={<TipsRp />}></Route>
      <Route path='/nosotros' element={<Nosotros />}></Route>
      <Route path='/contacto' element={<Contact />}></Route>
      <Route path='/' element={<Inicio />} ></Route>

      <Route path='*' element={<Error404 />}></Route>
      <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
    </Routes>

  </BrowserRouter>
);
