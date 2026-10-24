
import React from 'react';
import './App.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {

  // let foodItems = [];
  let foodItems = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee']; 

  // if (foodItems.length === 0){
  //   return <h3>I am Still hungry.</h3>
  // }

  // let emptyMessage = foodItems.length === 0 ?  <h3>I am Still hungry.</h3> : null
  

  return ( 
  <>
  <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodInput />
      <FoodItems items={foodItems} />
    </Container>

    <Container>
      <p>
        Above is the list of healthy foods that are good for your health and well being.
      </p>
    </Container>
    </>
  )
}

export default App;
