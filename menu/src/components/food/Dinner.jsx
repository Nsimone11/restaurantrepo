import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Dinner = () => {
    return (
    
        <div>  
    
        <div className="Title"><h1>Dinner</h1></div>
         
         <div className="Dinner-images">
                  <img className="Dinner-image" src='https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
                 
                 
         
                  <img className="Dinner-image" src='https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BhZ2hldHRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
                
         
                 
                  <img className="Dinner-image" src='https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
                 
         </div>
         <div className="texts3">
         <div className="Fried-chicken-text">
                 <h5> 8 pc fried chicken meal</h5> 
                 <h5>Mix and match or all one flavor $11.99</h5>
         </div>
         
         <div className="Spaghetti-text">
                 <h5> Spaghetti</h5> 
                 <h5> $8.99</h5>
         </div>
         
         <div className="Steak-text">
                 <h5> Steak meal, cooked to perfection.</h5> 
                 <h5> We also have impossible steak $9.99</h5>
         </div>
         
         </div>
        


        
        <Grid align="center">
        <p id="demo">Click here to get back to the main page:</p>
</Grid>

<Grid align="center">
<Link to="/">
<button type="button" >Home</button>
</Link>
</Grid>


<Grid align="right">
<Link to="/Dessert">
    <button type="button">Next: Dessert</button>
</Link>
</Grid>
    </div>



    );  
};
  

export default Dinner;