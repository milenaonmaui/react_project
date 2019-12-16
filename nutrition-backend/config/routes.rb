Rails.application.routes.draw do
  scope '/api' do
    resources :ingredients
    resources :meals
  end
      # url will be http://localhost:3000/api/ingredients
end
