import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import FetchDog from "./components/fetchDog/FetchDog";
import './index.css';
import Layout from "./layout/Layout";
import HeroGallery from "./components/heroGallery/HeroGallery";
import { heroes } from "../src/lessons/lesson05/data";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // импортируем HashRouter из react-router-dom и оборачиваем им все приложение
  <HashRouter>
    {/* импортируем компонент Routes (пути) и оборачиваем вокруг всех компонентов */}
    <Routes>
      {/* в корневой обертке Route указываем props: element и path */}
      {/* в качестве корневого элемента указываем Layout */}
      <Route path="/" element={<Layout />}>
        {/* пути ниже будут приходить на место Outlet в Layout */}
        <Route path="/" element={<p>Home Page 🏡</p>} />
        <Route path="fetch-dog" element={<FetchDog />} />
        <Route path="hero-gallery" element={<HeroGallery data={heroes} />} />

      </Route>
    </Routes>
  </HashRouter>
);




