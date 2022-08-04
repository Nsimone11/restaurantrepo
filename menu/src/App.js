import './components/navbar.css';
import './components/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.js';
import Items from './components/items';
import Breakfast from './components/food/Breakfast';
import Lunch from './components/food/Lunch';
import Dinner from './components/food/Dinner';
import Dessert from './components/food/Dessert';

function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path= "/" exact element={<Items />} />
      <Route path="/Breakfast" exact element={<Breakfast/>}/>
      <Route path="/Lunch" exact element={<Lunch/>}/>
      <Route path="/Dinner" exact element={<Dinner/>}/>
      <Route path="/Dessert" exact element={<Dessert/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
