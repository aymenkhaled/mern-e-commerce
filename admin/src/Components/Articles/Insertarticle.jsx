import React from 'react'
import {useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import { categorieService } from '../../Services/Categories-Service';
import { scategorieService } from '../../Services/Scategories-Service';
import { ArticleService } from '../../Services/Articles-Service';
import FileBase64 from 'react-file-base64';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';

const styles = {
  backgroundColor: "green",
  margin:"10px",
  padding:"8px",
  height:"40px",
  width:"120px"
  
};

const useStyles = makeStyles((theme) => ({
  
    formControl: {
      paddingTop: 15,
      borderRadius: 0,
      width:350,
      height:50,
      borderColor: "gray",
      borderWidth: 1.3
    }
  }));
const Insertarticle = () => {
  const classes = useStyles();

  let navigate=useNavigate();

  const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [categorieID, setCatID] = useState("");
  const [categories, setCategories] = useState([]);
  const [prixAchat, setPrixAchat] = useState("");
  const [prixVente, setPrixVente] = useState("");
  const [prixSolde, setPrixSolde] = useState("");
  const [marque, setMarque] = useState("");
  const [scategories, setscategories] = useState([]);
  const [scategorieID, setSCatID] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [caracteristiques, setCaracteristiques] = useState("");
  const [imageartpetitf, setImageartpetitf] = useState("");

  useEffect(()=>{
    GetData();
    
  },[]);
  const GetData=()=>{       
    categorieService.fetchcategorie()
        .then(res=>{
      setCategories(res.data);
        
    })
    .catch(function(error){
        console.log(error)
    })
    
  }
  const GetListSCategories=async(CategorieID )=>{
    console.log(CategorieID)    
    scategorieService.fetchScategorieByCat(CategorieID)
          .then((res) => {
        setscategories(res.data);
       
               });
   }
  const handleSubmit=(e)=>{
    e.preventDefault();
    
      const objetarticle  = {
             
              reference: reference,
              designation :designation,
              prixAchat :prixAchat,
              prixVente :prixVente,
              prixSolde :prixSolde,
              marque :marque,
              qtestock:qtestock,
              caracteristiques:caracteristiques,
              imageartpetitf : imageartpetitf,
              categorieID :categorieID,
              scategorieID:scategorieID
              }; 
             console.log(objetarticle)
              ArticleService.addArticle(objetarticle)
                   .then(res => console.log(res.data));
  
     navigate("/Articlesdt")
  }  
  return (
    <div>
        <form >
           <div>
           <Button variant="contained" sx={styles} onClick={(event)=>handleSubmit(event)}>Ajouter</Button>
            </div>
           <FormControl className={classes.formControl}>  
            <TextField
                          variant="outlined"
                          label="Désignation"
                          value={designation}
                          onChange={e => setDesignation(e.target.value)}
                          required />
             </FormControl>
                
             <FormControl className={classes.formControl}>  
             <TextField
                        variant="outlined"
                        label="Référence"
                        value={reference}
                        onChange={e => setReference(e.target.value)}
                        required />
             </FormControl> 
   
               <FormControl className={classes.formControl}>   
             <TextField
                      variant="outlined"
                        label="Prix Achat"
                        type="number"
                          value={prixAchat}
                        onChange={e => setPrixAchat(e.target.value)}
                  /> 
             </FormControl>  
           
             <FormControl className={classes.formControl}>   
             <TextField
                        variant="outlined"
                        label="Prix Vente"
                        type="number"
                        value={prixVente}
                        onChange={e => setPrixVente(e.target.value)}
                  /> 
             </FormControl> 
   
              <FormControl className={classes.formControl}>   
             <TextField
                        variant="outlined"
                          label="Prix Solde"
                          type="number"
                          value={prixSolde}
                          onChange={e => setPrixSolde(e.target.value)}
                  /> 
             </FormControl>   
           
           <FormControl className={classes.formControl}>           
           <TextField
                      variant="outlined"
                          label="Quantité Stock"
                          type="number"
                          value={qtestock}
                          onChange={e => setQtestock(e.target.value)}
                  /> 
           </FormControl>  
           
           <FormControl className={classes.formControl}>      
           <TextField
                    fullWidth
                      variant="outlined"
                      label="Marque"
                      value={marque}
                      onChange={e => setMarque(e.target.value)}
            /> 
         </FormControl>  
         <FormControl className={classes.formControl}>   
           <TextField
                    fullWidth
                     variant="outlined"
                    label="Caractéristiques"
                    value={caracteristiques}
                    onChange={e => setCaracteristiques(e.target.value)}
           /> 
            </FormControl>           
           
            <FormControl className={classes.formControl}>   
          
             <TextField
                fullWidth  
                select
                label="Catégories" 
                onChange={(event)=>{setCatID(event.target.value);  GetListSCategories(event.target.value)  }}
                helperText="Sélectionner une catégorie"
             >
               {
               categories ?    
               categories.map(c=>
               <MenuItem 
               style={{ display:"block" }} 
               value={c._id} 
               key={c._id}
                >{c.nomcategorie}</MenuItem>
                     )
               :null
               }
             </TextField>  

             </FormControl>
             <FormControl className={classes.formControl}>  
               <TextField
                fullWidth  
                select
                label="S/Catégories" 
                value={scategorieID}
                onChange={(event)=>{setSCatID(event.target.value) }}
                helperText="Sélectionner une s/catégorie"
             >
               {
               scategories ?    
               scategories.map(c=>
               <MenuItem 
               style={{ display:"block" }} 
               value={c._id} 
               key={c._id}
                >{c.nomscategorie}</MenuItem>
                     )
               :null
               }
             </TextField> 
          </FormControl>
        


          <div style={{marginTop:"50px"}} className={classes.formControl}> 

 
<FileBase64  type="file" multiple={false} onDone={({base64})=>{let b = base64.split('base64,')[1];setImageartpetitf(b)}} />

  </div>
  
  <div> 
  {imageartpetitf? <img src={`data:image/image/png;base64,${imageartpetitf}`}  alt="art" width="200" />:null}</div>


</form>
    </div>
  )
}

export default Insertarticle
