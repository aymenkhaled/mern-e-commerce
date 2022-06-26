import React from 'react'
import {useState, useEffect} from 'react';
import { useNavigate, useParams} from "react-router-dom";
import { categorieService } from '../../Services/Categories-Service';
import { Link } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import FileBase64 from 'react-file-base64';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Editcategorie = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [nomcategorie, setNomcategorie] = useState("");
  const [imagecategorie, setImagecategorie] = useState([]);
  useEffect(() => {
  GetListCategories();
  },[]); 
  const GetListCategories=async()=>{
  await categorieService.fetchcategorieById(id)
    .then(res => {
      setNomcategorie(res.data.nomcategorie);
      setImagecategorie(res.data.imagecategorie); 
    })
    .catch((error) => {
      console.log(error);
      toast("Une erreur est parvenue", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,

        draggable: true,
        progress: undefined,
      });
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const objetcategorie = {
      _id: id,
      nomcategorie: nomcategorie,
     
      imagecategorie: imagecategorie,
      
    };

    console.log(objetcategorie)
    await categorieService.editcategorie(objetcategorie).then((res) => {
      toast("categorie modifié", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/Categoriesdt")
    }).catch(error => {
      toast("Erreur Categoriesdt non modifié", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }
  return (
    <>
    <form onSubmit={handleSubmit} >
      <h2>Edit categorie </h2>
      <div>
        <Button style={{ padding: 15, margin: 20, width: 150 }}
          color="secondary"
          startIcon={<SaveIcon />}
          variant="contained"
          onClick={(event) => handleSubmit(event)}
        >

        </Button>

        <Button style={{ padding: 15, margin: 2, width: 150 }}
          color="primary"
          startIcon={<CancelIcon />}
          variant="contained"
        >
          {<Link to={"/Categoriesdt"} style={{
            textDecoration:
              "none", color: "white"
          }}>
            Annuler
          </Link>
          }
        </Button>
      </div>
      <FormControl >
        <TextField
          variant="outlined"
          label="Désignation"
          style={{ marginLeft: 8, marginTop: 20, width: 400 }}
          value={nomcategorie}
          onChange={e => setNomcategorie(e.target.value)}
          required />
      </FormControl>
      
    </form>
    <br />
    <FormControl>
      <div style={{ width: 400, height: 40 }}>
<FileBase64 type="file" multiple={false} onDone={({base64})=>{let b = base64.split('base64,')[1];setImagecategorie(b)}} />
<div> 
{imagecategorie? <img src={`data:image/image/png;base64,${imagecategorie}`}  alt="art" width="200" />:null}</div>
</div>
    </FormControl>
  </>
);
}
  

export default Editcategorie
