
export default function mealReducer(state = {meals: [], ingredients: []}, action) {
    
    switch (action.type) {
        
        case 'FETCH_MEALS':   
            return {meals: action.payload, ingredients: [...state.ingredients]}

        case 'FETCH_INGREDIENTS':
            return {meals: state.meals, ingredients: action.payload}

        case 'ADD_MEAL':
            return {meals: [...state.meals, action.payload], ingredients: [...state.ingredients]}
        case 'CHANGE_INGREDIENT':
            let meals = state.meals.map(meal => {
                if (meal.id === action.payload.id){
                    return action.payload
                } else {
                    return meal
                }
            })
            return {...state, meals: meals, ingredients: [...state.ingredients]}
        case 'DELETE_MEAL':
            return {meals: state.meals.filter(meal => meal.id !== action.payload), ingredients: [...state.ingredients]}
        
        case 'DELETE_INGREDIENT':
             return {meals: [...state.meals], ingredients: state.ingredients.filter(ingredient => ingredient.id !== action.payload)} 
        
        default: 
            return state
    }
}

