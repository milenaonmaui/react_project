export const deleteMeal = (mealId) => {

    let   url = `http://localhost:3001/api/meals/${mealId}`
  
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
                dispatch({type: 'DELETE_MEAL', payload: json})
            }       
        })
    }
}