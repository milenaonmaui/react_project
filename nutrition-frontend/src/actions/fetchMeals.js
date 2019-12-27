export function fetchMeals(){

    return (dispatch) => {
        fetch('http://localhost:3001/api/meals')
        .then(response => response.json())
        .then(json => dispatch({type: 'FETCH_MEALS', payload: json}))
    }
}