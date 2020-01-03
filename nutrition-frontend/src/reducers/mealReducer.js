export default function mealReducer(state = {meals: []}, action) {
    switch (action.type) {
        
        case 'FETCH_MEALS':   
            return {meals: action.payload}

        case 'ADD_MEAL':
            return {...state, meals: [...state.meals, action.payload]}
        case 'ADD_INGREDIENT':
            let meals = state.meals.map(meal => {
                if (meal.id == action.payload.id){
                    return action.payload
                } else {
                    return meal
                }
            })
            return {...state, meals:meals}

        default: 
            return state
    }
}