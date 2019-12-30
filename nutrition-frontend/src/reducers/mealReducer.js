export default function mealReducer(state = {meals: []}, action) {
    switch (action.type) {
        
        case 'FETCH_MEALS':   
            return {meals: action.payload}

        case 'ADD_MEAL':
            return {...state, meals: [...state.meals, action.payload]}
        default: 

            return state
    }
}