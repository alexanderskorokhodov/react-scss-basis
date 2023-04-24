//styles
import "./styles/App.scss";
// import "./styles/themes.scss";

import React, { useEffect, useState, useRef,  useMemo } from "react";
// import useColorScheme from "./scripts/useColorScheme";

// components
// import Footer from "./components/Footer";

// pages
import Land from "./Pages/Land";
// import Error from "./pages/Error"
// import Product from "./pages/Product";

// router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";


function App() {

  // theme references
  // const isDark = useColorScheme('dark');
  // const theme = isDark ? 'dark' : 'light';

  return (
    <div className={`App`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Land/>} />
            <Route path='/products' element={<Products />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
