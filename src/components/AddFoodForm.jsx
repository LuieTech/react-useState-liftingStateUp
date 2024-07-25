import React, { useState } from 'react'

function AddFoodForm({onCreateFood}) {

  const [formData, setFormData]= useState({
    name : "",
    image: "", 
    calories: 0,
    servings: 0
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData(prevState => ({
      ...prevState, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreateFood(formData)
    setFormData({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });

  }
  
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label  htmlFor="name" style={{margin:"10px"}}>Food Name</label>
        <input 
          type="text"
          name='name'
          id='name'
          value={formData.name}
          onChange={handleInputChange} 
        />
      </fieldset>
      <fieldset>
        <label  htmlFor="image" style={{margin:"10px"}}>Food Image</label>
        <input 
          type="text"
          name='image'
          id='image'
          value={formData.image}
          onChange={handleInputChange} 
        />
      </fieldset>
      <fieldset>
        <label  htmlFor="calories" style={{margin:"10px"}}>Calories</label>
        <input 
          type="number"
          name='calories'
          id='calories'
          value={formData.calories}
          onChange={handleInputChange} 
        />
      </fieldset>
      <fieldset>
        <label  htmlFor="servings" style={{margin:"10px"}}>Servings</label>
        <input 
          type="number"
          name='servings'
          id='servings'
          value={formData.servings}
          onChange={handleInputChange} 
        />
      </fieldset>
      <button 
        style={{color: "green", margin:"5px", }} type="submit">Create</button>
    </form>
  )
}

export default AddFoodForm