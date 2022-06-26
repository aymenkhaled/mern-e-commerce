import React from 'react'
import {useState, useEffect} from 'react';
import { useNavigate, useParams} from "react-router-dom";
import { categorieService } from '../../Services/Categories-Service';
import { scategorieService } from '../../Services/Scategories-Service';
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
const Editscategorie = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [nomscategorie, setNomscategorie] = useState("");
  const [categories, setCategories] = useState("");
  const [categorieID, setcategorieID] = useState("");
  const [imagescat, setImagescat] = useState([])
  const getScategorie= async()=>{
  await  scategorieService.fetchscategorieById(id)
    .then(res => {
      setNomscategorie(res.data.nomscategorie);
      setcategorieID(res.data.categorieID);
      setImagescat(res.data.imagescat); 
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
  useEffect(() => {
    GetListCategories();
    getScategorie();
  }, []);
  const GetListCategories = async () => {
    await categorieService.fetchcategorie()
      .then((res) => {
        setCategories(res.data);
      });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const objetscat = {
      _id: id,
      nomscategorie: nomscategorie,
      categorieID: categorieID,
      imagescat: imagescat,
    };

    console.log(objetscat)
    await scategorieService.editArticle(objetscat).then((res) => {
      toast("scat modifié", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/Scategoriesdt")
    }).catch(error => {
      toast("Erreur scategorie non modifié", {
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
      <h2>Edit scategorie </h2>
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
          {<Link to={"/Scategoriesdt"} style={{
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
          label="nomscategorie"
          style={{ marginLeft: 8, marginTop: 20, width: 400 }}
          value={nomscategorie}
          onChange={e => setNomscategorie(e.target.value)}
          required />
      </FormControl>
      
    </form>
    <br />
    <FormControl>
      <div style={{ width: 400, height: 40 }}>
<FileBase64 type="file" multiple={false} onDone={({base64})=>{let b = base64.split('base64,')[1];setImagescat(b)}} />
<div> 
{imagescat? <img src={`data:image/image/png;base64,${imagescat}`}  alt="art" width="200" />:null}</div>
</div>
    </FormControl>
  </>
);
}
export default Editscategorie
