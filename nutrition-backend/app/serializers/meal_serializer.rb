class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :kcal, :fats, :carbs, :sugars, :fiber, :protein, :ingredients
  
  def ingredients
    ActiveModel::Serializer::CollectionSerializer.new(self.object.meal_ingredients, each_serializer: MealIngredientSerializer)
  end
  
end
