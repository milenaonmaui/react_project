class MealIngredientSerializer < ActiveModel::Serializer
  attribute :id do
    object.ingredient.id
  end
  attributes :ingredient_amount
  attribute :name do
    object.ingredient.name
  end
  attribute :measure do
    object.ingredient.measure
  end
  attribute :kcal do
    object.ingredient.kcal
  end
  attribute :fats do
    object.ingredient.fats
  end
  attribute :carbs do
    object.ingredient.carbs
  end
  attribute :sugars do
    object.ingredient.sugars
  end
  attribute :fiber do
    object.ingredient.fiber
  end
  attribute :protein do
    object.ingredient.protein
  end
  
end
