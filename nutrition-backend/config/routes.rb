Rails.application.routes.draw do
  scope '/api' do
    resources :ingredients
    resources :meals do
      resources :meal_ingredients
    end

  end
      # url will be http://localhost:3000/api/ingredients
end
