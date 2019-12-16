class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :measure
      t.integer :kcal, :default => 0
      t.integer :fats, :default => 0
      t.integer :carbs, :default => 0
      t.integer :sugars, :default => 0
      t.integer :fiber, :default => 0
      t.integer :protein, :default => 0 

      t.timestamps
    end
  end
end
