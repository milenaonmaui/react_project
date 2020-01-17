class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :measure, :kcal, :fats, :carbs, :sugars, :fiber, :protein
end
