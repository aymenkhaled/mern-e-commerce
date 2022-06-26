import React from 'react'
import {useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import { categorieService } from '../../Services/Categories-Service';
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
const Insertcategorie = () => {
  const classes = useStyles();
  const [nomcategorie, setNomcategorie] = useState("");
  const [imagecategorie, setImagecategorie] = useState("");
  let navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    
      const objetcategorie = {
             
        nomcategorie: nomcategorie,
        imagecategorie:imagecategorie
              }; 
             console.log(objetcategorie)
             categorieService.addcategorie(objetcategorie)
                   .then(res => console.log(res.data));
  
     navigate("/Categoriesdt")
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
                          label="nomcategorie"
                          value={nomcategorie}
                          onChange={e => setNomcategorie(e.target.value)}
                          required />
             </FormControl>
                
             
        


          <div style={{marginTop:"50px"}} className={classes.formControl}> 

 
<FileBase64  type="file" multiple={false} onDone={({base64})=>{let b = base64.split('base64,')[1];setImagecategorie(b)}} />

  </div>
  
  <div> 
  {imagecategorie? <img src={`data:image/image/png;base64,${imagecategorie}`}  alt="art" width="200" />:null}</div>


</form>
    </div>
  )
}

export default Insertcategorie
