import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const Lunch = () => {
    return (
    
    <div>  
    
    <div className="Title"><h1>Lunch</h1></div>
     
     <div className="Lunch-images">
              <img className="Lunch-image" src='https://images.unsplash.com/photo-1576011185157-3bf941816a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyaWxsZWQlMjBjaGVlc2UlMjBzYW5kd2ljaCUyMGFuZCUyMGZyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
             
             
     
              <img className="Lunch-image" src='https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoZWVzZSUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
            
     
             
              <img className="Lunch-image" src='https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwYW5kJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="Logo" height={200} width={300}/>
             
     </div>
     <div className="texts2">
     <div className="Grilled-cheese-text">
             <h5> A grilled cheese sandwich with your choice of cheese.</h5> 
             <h5>$4.99</h5>
     </div>
     
     <div className="Pizza-text">
             <h5> Cheese pizza for 1</h5> 
             <h5> $6.99</h5>
     </div>
     
     <div className="Burger-text">
             <h5> 1 hamburger, grilled to perfection.</h5> 
             <h5> We also have impossible burgers $9.99</h5>
     </div>
     
     </div>
        





        
        <p id="demo">Click here to get back to the main page:</p>


<Grid align="center">
<Link to="/">
<button type="button" >Home</button>
</Link>
</Grid>


<Grid align="right">
<Link to="/Dinner">
    <button type="button">Next: Dinner</button>
</Link>
</Grid>
    </div>



    );  
};
  

export default Lunch;