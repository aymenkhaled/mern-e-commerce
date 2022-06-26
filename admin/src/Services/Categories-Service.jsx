import Api from "../Axios/api";
const CATEGORIE_API="/categories"

const fetchcategorie=async()=> {
    return await Api.get(CATEGORIE_API);
    }
    const fetchcategorieById=async(categorieId)=> {
        return await Api.get(CATEGORIE_API + '/' + categorieId);
        }
        const deletecategorie=async(categorieId) =>{
        return await Api.delete(CATEGORIE_API + '/' + categorieId);
        }
        const addcategorie=async(categorie)=>{
            return await Api.post(CATEGORIE_API, categorie)
        }
        const editcategorie=async(categorie) =>{ 
        return await Api.put(CATEGORIE_API + '/' + categorie._id, categorie);
        }
        // const fetchArticleByCat=async(catId)=> {
        // return await Api.get(ARTICLE_API + '/affparcat/' + catId);
        // }        
    export const categorieService = {
        fetchcategorie,
        fetchcategorieById,
        deletecategorie,
        addcategorie,
        editcategorie
        // fetchArticleByCat
        }