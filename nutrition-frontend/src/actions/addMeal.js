export const  addMeal = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3001/api/meals', {
            headers: {
                'Content-Type': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => dispatch({type: 'ADD_MEAL', payload: json}))
        
    }
}