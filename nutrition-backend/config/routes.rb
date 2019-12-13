Rails.application.routes.draw do
  namespace :api do
    resources :ingredients
    resources :meals
  # url will be http://localhost:3000/api/ingredients
end
