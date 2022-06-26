import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Editarticle from "../Components/Articles/Editarticle";
import Insertarticle from "../Components/Articles/Insertarticle";
import Listarticles from "../Components/Articles/Listarticles";
import Listarticlesdt from "../Components/Articles/Listarticlesdt";
import Editcategorie from "../Components/Categories/Editcategorie";
import Insertcategorie from "../Components/Categories/Insertcategorie";
import Listcategories from "../Components/Categories/Listcategories";
import EditScategorie from "../Components/SouCategories/Editscategorie";
import InsertScategorie from "../Components/SouCategories/InsertScategorie";
import ListScategories from "../Components/SouCategories/Listscategories";
import Listcategoriesdt from "../Components/Categories/Listcategoriesdt";
import Listscategoriesdt from '../Components/SouCategories/Listscategoriesdt';
import ListArticlesCard from "../Components/Articles/ListArticlesCard";
const ListRoutes = () => {
  return (
    
      <Routes>
          <Route path="/Articles"  element={<Listarticles/>}></Route>
          <Route path="/ArticlesCard"  element={<ListArticlesCard/>}></Route>
          <Route path="/Articlesdt"  element={<Listarticlesdt/>}></Route>
          <Route path="/Articles/add" element={<Insertarticle/>}/>
<Route path="/Article/edit/:id" element={<Editarticle/>}/>
<Route path="/Categories"  element={<Listcategories/>}/>
<Route path="/Categoriesdt"  element={<Listcategoriesdt/>}/>
<Route path="/Categories/add" element={<Insertcategorie/>}/>
<Route path="/Categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/Scategories"  element={<ListScategories/>}/>
<Route path="/Scategoriesdt"  element={<Listscategoriesdt/>}/>
<Route path="/Scategories/add" element={<InsertScategorie/>}/>
<Route path="/Scategories/edit/:id" element={<EditScategorie/>}/>
      </Routes>
    
  )
}

export default ListRoutes
