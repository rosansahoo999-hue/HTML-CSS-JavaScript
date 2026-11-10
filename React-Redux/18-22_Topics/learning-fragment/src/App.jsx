import React, { useState } from 'react';
import './App.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';

function App() {

  // let foodItems = [];

  let [ foodItems, setFoodItems ] = useState([]);

  // console.log(`Current value of textState:${textToShow}`)

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  // if (foodItems.length === 0){
  //   return <h3>I am Still hungry.</h3> 
  // }

  // let emptyMessage = foodItems.length === 0 ?  <h3>I am Still hungry.</h3> : null
  

  return ( 
  <>
  <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />
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
