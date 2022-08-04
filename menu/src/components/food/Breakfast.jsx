import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Breakfast = () => {
    return (
    
    <div>  
    
    
   <div className="Title"><h1>Breakfast</h1></div>
     
<div className="Breakfast-images">
         <img className="Breakfast-image" src='https://images.unsplash.com/photo-1587339144367-f1cacbecac82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFuY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
        
        

         <img className="Breakfast-image" src='https://images.unsplash.com/photo-1456511280309-a5312dce4f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FmZmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
       

        
         <img className="Breakfast-image" src='https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlbmNoJTIwdG9hc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
        
</div>
<div className="texts">
<div className="Pancake-text">
        <h5> Pancakes: two flapjacks with powdered sugar on top.</h5> 
        <h5> Chocolate syrup is available for .50 cents. $7.99</h5>
</div>

<div className="Waffle-text">
        <h5> Waffles: two golden brown Belgian waffles with powdered sugar on top.</h5> 
        <h5> Chocolate chips are available for .50 cents. $8.99</h5>
</div>

<div className="French-toast-text">
        <h5> French toast: two perfectly made french toast slices with powdered sugar and fruit on top.</h5> 
        <h5> $9.99</h5>
</div>

</div>
        <p id="demo">Click here to get back to the main page:</p>


<Grid align="center">
<Link to="/">
<button type="button" >Home</button>
</Link>
</Grid>


<Grid align="right">
<Link to="/Lunch">
    <button type="button">Next: Lunch</button>
</Link>
</Grid>
    </div>



    );  
};
  

export default Breakfast;