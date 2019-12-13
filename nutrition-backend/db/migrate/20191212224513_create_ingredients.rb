class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :measure
      t.integer :kcal
      t.integer :carbs
      t.integer :sugars
      t.integer :fiber
      t.integer :protein

      t.timestamps
    end
  end
end
