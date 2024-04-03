import React from 'react'
import {Route,Routes} from "react-router-dom" 
import Home from '../pages/Home'
import Shirts from '../pages/Shirts'
import Jeans from '../pages/Jeans'
import Shoes from '../pages/Shoes'
import PageNotFound from '../pages/PageNotFound'


export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="shirts" element={<Shirts/>} />
        <Route path="jeans" element={<Jeans />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
