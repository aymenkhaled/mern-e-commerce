import React from 'react'
import {useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import { scategorieService } from '../../Services/Scategories-Service';
import FileBase64 from 'react-file-base64';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@mui/styles';
import { categorieService } from '../../Services/Categories-Service';

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
const InsertScategorie = () => {
  const classes = useStyles();

  let navigate=useNavigate();
  const [nomscategorie, setNomscategorie] = useState("");
  const [imagescat, setImagescat] = useState("");
  const [categorieID, setCatID] = useState("");
  const [categories, setCategories] = useState([]);

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
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    
      const objetscategorie  = {
             
              nomscategorie: nomscategorie,
              imagescat :imagescat,
             
              categorieID :categorieID,
              }; 
             console.log(objetscategorie)
              scategorieService.addscategorie(objetscategorie)
                   .then(res => console.log(res.data));
  
     navigate("/Scategoriesdt")
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
                          label="nomscategorie"
                          value={nomscategorie}
                          onChange={e => setNomscategorie(e.target.value)}
                          required />
             </FormControl>
             <FormControl className={classes.formControl}>   
          
          <TextField
             fullWidth  
             select
             label="Catégories" 
             onChange={(event)=>{setCatID(event.target.value);  }}
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
             
        


          <div style={{marginTop:"50px"}} className={classes.formControl}> 

 
<FileBase64  type="file" multiple={false} onDone={({base64})=>{let b = base64.split('base64,')[1];setImagescat(b)}} />

  </div>
  
  <div> 
  {imagescat? <img src={`data:image/image/png;base64,${imagescat}`}  alt="art" width="200" />:null}</div>


</form>
    </div>
  )
}
  

export default InsertScategorie
