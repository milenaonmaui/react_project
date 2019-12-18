class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :kcal, :fats, :carbs, :sugars, :fiber, :protein
end
