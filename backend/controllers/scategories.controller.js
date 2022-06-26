import mongoose from "mongoose";
import Scategorie from "../models/scategorie.js";

export const getScategorie = async (req, res) => {
    try {
        const scat = await Scategorie.find().populate("categorieID");
        res.status(200).json(scat)
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getScategorieById = async (req, res) => {
    try {
        const scat = Scategorie.findById(req.params.id);
        res.status(200).json(scat);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getScatByCat = async (req, res) => {
    try {
        const scat = await Scategorie.find({categorieID: req.params.categorieID});
        res.status(200).json(scat)
    }catch(error){
        res.status(404).json({message: error.message});
    }
}
export const createScategorie = async (req, res) => {
    const newScategorie = new Scategorie(req.body);
    try {
        newScategorie.save();
        res.status(201).json(newScategorie)
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updateScategorie = async (req, res) => {
    const { id } = req.params;
    const { nomscategorie, imagescat,categorieID} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de sous categorie avec un id: ${id}`);

    const scat1 = { nomscategorie:nomscategorie,imagescat:imagescat, _id: id,categorieID:categorieID };

    await Scategorie.findByIdAndUpdate(id, scat1);

    res.json(scat1);

}
export const deleteScategorie = async (req, res) => {
    try {
        const scat = await Scategorie.findByIdAndDelete(req.params.id);
        res.status(200).json(scat);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}