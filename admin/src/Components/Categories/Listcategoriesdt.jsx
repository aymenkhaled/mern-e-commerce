import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { categorieService } from '../../Services/Categories-Service';
import { useState,useEffect } from 'react';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
const Listcategoriesdt = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
    GetListCategories();
    console.log(categories)
    },[]); 
    const GetListCategories=async()=>{
    await categorieService.fetchcategorie()
    .then((res) => {
        setCategories(res.data);
    });
    }
    const delCategorie= async (_id) => { 
    await categorieService.deletecategorie(_id)
    var newcategories=categories.filter((item)=>{
    console.log(item)
    return item._id!==_id
    })
    setCategories(newcategories);
    }
    const columns = [
        {
        label: "nomcategorie",
        name: "nomcategorie"
        },

    {
    name:"imagecategorie",
    label: "Image",
    options: {
    customBodyRender : (imagecategorie) => (
        imagecategorie?
    <img
    style={{ height: 60, borderRadius: '50%' }}
    src={`data:image/image/png;base64,${imagecategorie}` }alt="imagecat" 
    
    />
    : null
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
    { <Link to={"/Categories/edit/" + value} >
    <EditIcon color='secondary' />
    </Link>
    }
    </IconButton>
    <IconButton onClick={()=>{delCategorie(value)}}>
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
    { <Link to={"/Categories/add"} style={{textDecoration:
    "none",color:"white"}}>
    Ajouter
    </Link>
    }
    </Button>
    </div>
    {categories.length>0? 
    <ThemeProvider theme={createTheme()}>
    <MUIDataTable
    title="Liste des categories"
    data={categories}
    columns={columns}
    />
    </ThemeProvider>
    :null
    }
    </div>
    )  
    }

export default Listcategoriesdt
