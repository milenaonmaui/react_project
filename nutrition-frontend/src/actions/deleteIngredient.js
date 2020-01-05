export const deleteIngredient = (ingredientId, mealId) => {
    let url = `http://localhost:3001/api/meals/${mealId}/meal_ingredients/${ingredientId}`

    console.log(url)
    return (dispatch) => {
        fetch(url, {           
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(json => dispatch({type: 'DELETE_INGREDIENT', payload: json}))
        
    }
}