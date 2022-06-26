import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ArticleService } from '../../Services/Articles-Service';
import { useState, useEffect } from 'react';
const ListArticlesCard = () => {
    const [articles, setArticles] = useState([]);
useEffect(() => {
GetListArticles();
}); 
const GetListArticles=async()=>{
await ArticleService.fetchArticles()
.then((res) => {
setArticles(res.data);
});
}

  return (
    <div className="container">
    <div
    style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
    
    { articles.map((art,ind)=>{
    return <Card sx={{ maxWidth: 'auto',margin: 1 }}>
    <CardMedia
    component="img"
    alt="imageart" 
    height="160"
    image={`data:image/image/png;base64,${art.imageartpetitf}`} 
    />
    <CardContent>
    <Typography gutterBottom variant="h6" component="div">
    {art.reference}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Prix : {art.prixVente} DT
    </Typography>
    </CardContent>
    <CardActions>
    <Button disabled={art.qtestock<=1}
    variant="contained" color="secondary" size="large"
>
{art.qtestock<=1? "OUT OF SOLD": "Add to cart"}
</Button>
</CardActions>
</Card>})}

</div>
</div>
)
}
    
  

export default ListArticlesCard
