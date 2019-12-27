export default function mealReducer(state = {meals: []}, action) {
    switch (action.type) {
        
        case 'FETCH_MEALS':
            
            return {meals: action.payload}

        default: 

            return state
    }
}