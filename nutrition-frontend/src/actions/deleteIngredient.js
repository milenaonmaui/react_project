export const deleteIngredient = (ingredientId, mealId) => {
    let url;

    if (mealId) {
       url = `http://localhost:3001/api/meals/${mealId}/meal_ingredients/${ingredientId}`
    } else {
       url = `http://localhost:3001/api/ingredients/${ingredientId}` 
    }
    console.log(url)
    return (dispatch) => {
        fetch(url, {           
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(json => {
            if (json.error){
                alert(json.error)
            } else {
                if (mealId) {
                   dispatch({type: 'CHANGE_INGREDIENT', payload: json})
                } else {
                   dispatch({type: 'DELETE_INGREDIENT', payload: json})
                }
            }
        
        })
    }
}