
export default function mealReducer(state = {meals: []}, action) {
    console.log("In reducer", action.type, action.payload)
    switch (action.type) {
        
        case 'FETCH_MEALS':   
            return {meals: action.payload}

        case 'ADD_MEAL':
            return {...state, meals: [...state.meals, action.payload]}
        case 'CHANGE_INGREDIENT':
            let meals = state.meals.map(meal => {
                if (meal.id === action.payload.id){
                    return action.payload
                } else {
                    return meal
                }
            })
            return {...state, meals: meals}
        case 'DELETE_MEAL':
        return {meals: state.meals.filter(meal => meal.id !== action.payload)}
        
        default: 
            return state
    }
}

