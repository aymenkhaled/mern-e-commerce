import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { ArticleService } from '../../Services/Articles-Service';
import { useState,useEffect } from 'react';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
const Listarticlesdt = () => {
    const [articles, setArticles] = useState([]);
useEffect(() => {
GetListArticles();
console.log(articles)
},[]); 
const GetListArticles=async()=>{
await ArticleService.fetchArticles()
.then((res) => {
setArticles(res.data);
});
}
const delArticle= async (_id) => { 
await ArticleService.deleteArticle(_id)
var newarticles=articles.filter((item)=>{
console.log(item)
return item._id!==_id
})
setArticles(newarticles);
}
const columns = [
    {
    label: "Référence",
    name: "reference"
    },
    {
    label: "Désignation",
    name: "designation"
    },
    {
    label: "Prix Achat",
    name: "prixAchat"
    },
    {
    label: "Prix Vente",
    name: "prixVente"
},
{
label: "Marque",
name: "marque"
},
{
label: "Quatité Stock",
name: "qtestock"
},
{
name:"imageartpetitf",
label: "Image",
options: {
customBodyRender : (imageartpetitf) => (
  imageartpetitf?
<img
style={{ height: 60, borderRadius: '50%' }}
src={`data:image/image/png;base64,${imageartpetitf}` }alt="imageart" 

/>
: null
)
}
},
{
name:"categorieID",
label: "Catégorie",
options: {
customBodyRender : (categ) => (
categ? categ.nomcategorie : null
)
}
},
{
name:"scategorieID",
label: "S/Catégorie",
options: {
customBodyRender : (scateg) => (
scateg? scateg.nomscategorie :null
)
}
},
{
name: "_id",
label: "Actions",
options: {
customBodyRender: (value) => (
<div>
<IconButton >
{ <Link to={"/Article/edit/" + value} >
<EditIcon color='secondary' />
</Link>
}
</IconButton>
<IconButton onClick={()=>{delArticle(value)}}>
<DeleteIcon  sx={{ color: pink[500] }} />
</IconButton>
</div>
)
}
},
];
    
  return (
    <div>
      <div style={{padding:5,margin:5}}>
<Button
color="success"
startIcon={<AddCircleIcon />}
variant="contained"
>
{ <Link to={"/Articles/add"} style={{textDecoration:
"none",color:"white"}}>
Ajouter
</Link>
}
</Button>
</div>
{articles.length>0? 
<ThemeProvider theme={createTheme()}>
<MUIDataTable
title="Liste des articles"
data={articles}
columns={columns}
/>
</ThemeProvider>
:null
}
</div>
)  
}



export default Listarticlesdt
