import Categorie from './categorie.js';
import mongoose from 'mongoose';

const scategorieSchema = mongoose.Schema({
    nomscategorie: {type: String, required: true},
    imagescat :{ type: String, required: false,unique:true },
    categorieID: {type:mongoose.Schema.Types.ObjectId,
        ref:Categorie},
});



const Scategorie=mongoose.model('Scategorie',scategorieSchema);
export default Scategorie
