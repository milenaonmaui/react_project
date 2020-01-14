export function fetchIngredients(){

    return (dispatch) => {
        fetch('http://localhost:3001/api/ingredients')
        .then(response => response.json())
        .then(json => dispatch({type: 'FETCH_INGREDIENTS', payload: json}))
    }
}