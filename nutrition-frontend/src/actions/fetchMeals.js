export function fetchMeals(){
    fetch('http://localhost:3001/api/meals')
    .then(response => response.json())
    .then(json => console.log(json))
}