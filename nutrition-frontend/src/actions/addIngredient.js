export const addIngredient = (ingredient_data, mealId) => {
    let url = `http://localhost:3001/api/meals/${mealId}/meal_ingredients`
    console.log(url)
    return (dispatch) => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(ingredient_data)
        })
        .then(response => response.json())
        .then(json => {
            if (json.error){
                alert(json.error)
            } else {
                dispatch({type: 'ADD_INGREDIENT', payload: json})
            }
        
        })
        
    }
}
