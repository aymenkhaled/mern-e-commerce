import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { scategorieService } from '../../Services/Scategories-Service';
import { useState,useEffect } from 'react';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";

const Listscategoriesdt = () => {
    const [scategories, setScategories] = useState([]);
    useEffect(() => {
    GetListscategories();
    console.log(scategories)
    },[]); 
    const GetListscategories=async()=>{
    await scategorieService.fetchscategorie()
    .then((res) => {
        setScategories(res.data);
    });
    }
    const delScategorie= async (_id) => { 
    await scategorieService.deletescategorie(_id)
    var newscategories=scategories.filter((item)=>{
    console.log(item)
    return item._id!==_id
    })
    setScategories(newscategories);
    }
    const columns = [
        {
        label: "nomscategorie",
        name: "nomscategorie"
        },

    {
    name:"imagescat",
    label: "imagescat",
    options: {
    customBodyRender : (imagescat) => (
        imagescat?
    <img
    style={{ height: 60, borderRadius: '50%' }}
    src= { imagescat.length>50 ?(`data:image/image/png;base64,${imagescat}`): imagescat } alt="imagescat" 
    
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
}},
    {
    name: "_id",
    label: "Actions",
    options: {
    customBodyRender: (value) => (
    <div>
    <IconButton >
    { <Link to={"/Scategories/edit/" + value} >
    <EditIcon color='secondary' />
    </Link>
    }
    </IconButton>
    <IconButton onClick={()=>{delScategorie(value)}}>
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
    { <Link to={"/Scategories/add"} style={{textDecoration:
    "none",color:"white"}}>
    Ajouter
    </Link>
    }
    </Button>
    </div>
    {scategories.length>0? 
    <ThemeProvider theme={createTheme()}>
    <MUIDataTable
    title="Liste des scategories"
    data={scategories}
    columns={columns}
    />
    </ThemeProvider>
    :null
    }
    </div>
    )  
    }

export default Listscategoriesdt
