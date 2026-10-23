
import React from 'react';
import './App.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {

  // let foodItems = [];
  let foodItems = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee']; 

  // if (foodItems.length === 0){
  //   return <h3>I am Still hungry.</h3>
  // }

  // let emptyMessage = foodItems.length === 0 ?  <h3>I am Still hungry.</h3> : null
  

  return ( 
  <React.Fragment>
      <h1 className='food-heading'>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </React.Fragment>
  )
}

export default App;
