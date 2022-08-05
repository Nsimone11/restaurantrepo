import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Dessert = () => {
    return (
        <div>  
    
        <div className="Title"><h1>Dessert</h1></div>
         
         <div className="Dessert-images">
                  <img className="Dessert-image" src='https://images.unsplash.com/photo-1541996275318-4890e83660a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW0lMjBzdW5kYWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
                 
                 
         
                  <img className="Dessert-image" src='https://images.unsplash.com/photo-1625876981820-be17a6807189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2hpcCUyMGNvb2tpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
                
         
                 
                  <img className="Dessert-image" src='https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
                 
         </div>
         <div className="texts4">
         <div className="Ice-cream-sundae-text">
                 <h5>Ice cream sundae</h5> 
                 <h5>Your choice of chocolate, vanilla, or strawberry ice cream $4.99</h5>
         </div>
         
         <div className="Cookies-text">
                 <h5> 3 chocolate chip cookies; soft, warm, and with gooey chocolate </h5> 
                 <h5> $5.99</h5>
         </div>
         
         <div className="Chocolate-cake-text">
                 <h5> Moist chocolate cake with chocolate frosting and a cherry on top</h5> 
                 <h5> You get the whole cake! $9.99</h5>
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

    </div>



    );  
};
  

export default Dessert;