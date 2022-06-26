import React from 'react'
import {useState, useEffect} from 'react';
import { useNavigate, useParams} from "react-router-dom";
import { categorieService } from '../../Services/Categories-Service';
import { scategorieService } from '../../Services/Scategories-Service';
import { ArticleService } from '../../Services/Articles-Service';
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
const Editarticles = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [categories, setCategories] = useState("");
  const [categorieID, setcategorieID] = useState("");
  const [scategories, setScategories] = useState("");
  const [scategorieID, setscategorieID] = useState("");
  const [prixAchat, setPrixAchat] = useState("");
  const [prixVente, setPrixVente] = useState("");
  const [prixSolde, setPrixSolde] = useState("");
  const [marque, setMarque] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [caracteristiques, setCaracteristiques] = useState("");
  const [imageartpetitf, setImagePetitf] = useState([])
  const getArticles= async()=>{
  await  ArticleService.fetchArticleById(id)
    .then(res => {
      setReference(res.data.reference);
      setDesignation(res.data.designation);
      setscategorieID(res.data.scategorieID)
      setcategorieID(res.data.categorieID);
      setPrixAchat(res.data.prixAchat);
      setPrixVente(res.data.prixVente);
      setPrixSolde(res.data.prixSolde);
      setMarque(res.data.marque);
      setQtestock(res.data.qtestock);
      setCaracteristiques(res.data.caracteristiques);
      setImagePetitf(res.data.imageartpetitf); 
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
    getArticles();
  }, []);
  const GetListCategories = async () => {
    await categorieService.fetchcategorie()
      .then((res) => {
        setCategories(res.data);
      });
  }
  const GetListSCategories = async (idcat) => {
    await scategorieService.fetchScategorieByCat(idcat)
      .then((res) => {
        setScategories(res.data);
      });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const objetarticle = {
      _id: id,
      reference: reference,
      designation: designation,
      prixAchat: prixAchat,
      prixVente: prixVente,
      prixSolde: prixSolde,
      marque: marque,
      qtestock: qtestock,
      caracteristiques: caracteristiques,
      categorieID: categorieID,
      imageartpetitf: imageartpetitf,
      scategorieID: scategorieID
    };

    console.log(objetarticle)
    await ArticleService.editArticle(objetarticle).then((res) => {
      toast("Article modifié", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/articlesdt")
    }).catch(error => {
      toast("Erreur Article non modifié", {
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
      <h2>Edit Article </h2>
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
          {<Link to={"/articlesdt"} style={{
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
          value={designation}
          onChange={e => setDesignation(e.target.value)}
          required />
      </FormControl>
      <FormControl >
        <TextField
          variant="outlined"
          label="Référence"
          value={reference}
          style={{ marginLeft: 8, marginTop: 20, width: 400 }}
          onChange={e => setReference(e.target.value)}
          required />
      </FormControl> <br />
      <FormControl >
        <TextField
          variant="outlined"
          label="Prix Achat"
          type="number"
          style={{ marginLeft: 8, marginTop: 20, width: 400 }}
          value={prixAchat}
          onChange={e => setPrixAchat(e.target.value)}
        />
      </FormControl>
      <FormControl >

        <TextField
          variant="outlined"
          label="Prix Vente"
          type="number"
          style={{ marginLeft: 8, marginTop: 20, width: 400 }}
          value={prixVente}
          onChange={e => setPrixVente(e.target.value)}
        />
      </FormControl> <br />
      <FormControl >
        <TextField
          variant="outlined"
          label="Prix Solde"
          type="number"
          style={{ marginLeft: 8, marginTop: 20, width: 400 }}
          value={prixSolde}
          onChange={e => setPrixSolde(e.target.value)}
        />
      </FormControl>
      <FormControl >
        <TextField
          variant="outlined"
          label="Quantité Stock"
          type="number"
          style={{ marginLeft: 8, marginTop: 20, width: 400 }}
          value={qtestock}
          onChange={e => setQtestock(e.target.value)}
        />
      </FormControl><br />
      <FormControl>
        <TextField
          style={{ marginLeft: 8, marginTop: 20, width: 400 }}
          variant="outlined"
          label="Marque"
          value={marque}
          onChange={e => setMarque(e.target.value)}
        />
      </FormControl>
      <FormControl >
        <TextField
          style={{ marginLeft: 8, marginTop: 20, width: 400 }}
          margin="normal"
          variant="outlined"
          multiline
          rows={2}

          label="Caractéristiques"
          type="textarea"
          value={caracteristiques}
          onChange={e => setCaracteristiques(e.target.value)}
        />
      </FormControl> <br />
      <FormControl >
        <TextField
          select
          label="Categories"
          variant="outlined"
          value={categorieID}
          style={{ marginLeft: 8, marginTop: 20, width: 800 }}
          onChange={e => {
            setcategorieID(e.target.value);
            GetListSCategories(e.target.value)
          }}
        >
          {
            categories ?
              categories.map(f =>
                <MenuItem value={f._id}>{f.nomcategorie}
                </MenuItem>
              )
              : null
          }
        </TextField>
      </FormControl><br />
      <FormControl >
        <TextField
          select
          label="Sous Catégorie"
          variant="outlined"
          value={scategorieID}
          style={{ marginLeft: 8, marginTop: 20, width: 800 }}
          onChange={e => setscategorieID(e.target.value)}
        >
          {
            scategories ?
              scategories.map(f =>
                <MenuItem value={f._id}>{f.nomscategorie}
                </MenuItem>
              )
              : <MenuItem value={scategorieID._id}>{scategorieID.nomscategorie}
              </MenuItem>
          }
        </TextField>

      </FormControl>
    </form>
    <br />
    <FormControl>
      <div style={{ width: 400, height: 40 }}>
<FileBase64 type="file" multiple={false} onDone={({base64})=>{let b = base64.split('base64,')[1];setImagePetitf(b)}} />
<div> 
{imageartpetitf? <img src={`data:image/image/png;base64,${imageartpetitf}`}  alt="art" width="200" />:null}</div>
</div>
    </FormControl>
  </>
);
}

export default Editarticles
