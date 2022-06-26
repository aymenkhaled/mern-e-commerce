import mongoose from "mongoose";
import Article from "../models/article.js";

export const getArticle = async (req, res) => {
    try {
        const scat = await Article.find().populate("categorieID").populate("scategorieID");
        res.status(200).json(scat)
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getArticleById = async (req, res) => {
    try {
        const scat = await Article.findById(req.params.id);
        res.status(200).json(scat);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createArticle = async (req, res) => {
    const newArticle = new Article(req.body);
    try {
        newArticle.save();
        res.status(201).json(newArticle)
    }catch(error){
        res.status(409).json({message: error.message});
    }
}


export const updateArticle= async (req, res) => {
    const { id } = req.params;
       
    
   const art= await Article.findByIdAndUpdate(id, req.body);
    res.json(art);
}
export const deleteArticle = async (req, res) => {
    try {
        const art = await Article.findByIdAndDelete(req.params.id);
        res.status(200).json(art);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}