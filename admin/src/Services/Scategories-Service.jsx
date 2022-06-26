import Api from "../Axios/api";
const SCATEGORIE_API="/scategories"

const fetchscategorie=async()=> {
    return await Api.get(SCATEGORIE_API);
    }
    const fetchscategorieById=async(scategorieId)=> {
        return await Api.get(SCATEGORIE_API + '/' + scategorieId);
        }
        const deletescategorie=async(scategorieId) =>{
        return await Api.delete(SCATEGORIE_API + '/' + scategorieId);
        }
        const addscategorie=async(scategorie)=>{
            return await Api.post(SCATEGORIE_API, scategorie)
        }
        const editscategorie=async(scategorie) =>{ 
        return await Api.put(SCATEGORIE_API + '/' + scategorie._id, scategorie);
        }
        const fetchScategorieByCat=async(catId)=> {
        return await Api.get(SCATEGORIE_API + '/cat/' + catId);
        }        
    export const scategorieService = {
        fetchscategorie,
        fetchscategorieById,
        deletescategorie,
        addscategorie,
        editscategorie,
        fetchScategorieByCat
        }