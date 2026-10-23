
import React from 'react';
import './App.css'

function App() {

  let foodItems = [];
  // let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee']; 

  // if (foodItems.length === 0){
  //   return <h3>I am Still hungry.</h3>
  // }

  let emptyMessage = foodItems.length === 0 ?  <h3>I am Still hungry.</h3> : null
  let logicalMessage = foodItems.length === 0 && <h3>I am Still hungry.</h3>

  return ( 
  <React.Fragment>
      <h1>Healthy Food</h1>
      {emptyMessage}
      {logicalMessage}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default App;
