import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodData, setFoodData] = useState(foodsJson);
  // console.log(foodData);

  const foodList = foodData.map((food) => (
    <FoodBox food={food} onDeleteFood={handledeleteFood} key={food.name} />
  ))

  function handledeleteFood(deleteFoodId) {
    const updatedFoodsData = [...foodData].filter(
      (food) => food.id !== deleteFoodId
    );
    setFoodData(updatedFoodsData);
  }

  const handleCreateFood = (newFoodBody) => {
    const updatedFoodsData = [...foodData, newFoodBody]
    setFoodData(updatedFoodsData)
  }

  return (
    <>
      <AddFoodForm onCreateFood={handleCreateFood}/>
      <div className="App">
        {foodList}
      </div>
    </>
  );
}

export default App;
