
function FoodBox({ food, onDeleteFood }) {
  return (
    <div style={{marginBottom:"60px", padding: "25px", borderBlockEnd: "solid green"}}>
      <p>{food.name}</p>

      <img src={food.image} style={{width:"200px"}}/>

      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>

      <button style={{color: "red" }} onClick={() => onDeleteFood(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
