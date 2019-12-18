class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :kcal, :fats, :carbs, :sugars, :fiber, :protein, :ingredients
  
  def ingredients
    self.object.ingredients
  end
end
