import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Dessert = () => {
    return (
    
    <div>  
    
    <Grid align="center">
   <div className="Title"><h1>Dessert</h1></div>
     </Grid>

      <Grid align="center">
         <img src='https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="Logo" height={200} width={300}/>
         </Grid>
        
        <Grid align="center">
        <p id="demo">Click here to get back to the main page:</p>
</Grid>

<Grid align="center">
<Link to="/">
<button type="button" >Home</button>
</Link>
</Grid>

    </div>



    );  
};
  

export default Dessert;