class Meal < ApplicationRecord
    has_many :meal_ingredients
    has_many :ingredients, through: :meal_ingredients
    accepts_nested_attributes_for :ingredients
    validates  :name, presence: true

    def add_ingredient(ingredient, servings)
        self.ingredients << ingredient
        self.kcal += ingredient.kcal*servings
        self.carbs += ingredient.carbs*servings
        self.sugars += ingredient.sugars*servings
        self.fiber +=ingredient.fiber*servings
        self.protein += ingredient.protein*servings
        self.save
    end

    def delete_ingredient(ingredient, servings)
        self.kcal -= ingredient.kcal*servings
        self.carbs -= ingredient.carbs*servings
        self.sugars -= ingredient.sugars*servings
        self.fiber -=ingredient.fiber*servings
        self.protein -= ingredient.protein*servings
        self.save
    end
end
