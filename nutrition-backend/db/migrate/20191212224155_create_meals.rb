class CreateMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :description
      t.integer :kcal
      t.integer :carbs
      t.integer :sugars
      t.integer :fiber
      t.integer :protein
      t.float :servings
      t.timestamps
    end
  end
end
