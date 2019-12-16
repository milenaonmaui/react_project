class CreateMealIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :meal_ingredients do |t|
      t.references :meal, foreign_key: true
      t.references :ingredient, foreign_key: true
      t.float :ingredient_amount, :default => 0

      t.timestamps
    end
  end
end
