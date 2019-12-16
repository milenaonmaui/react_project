# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ingredient_list = [
    ["egg", "1 large", 78, 1, 1, 0, 6],
    ["milk", "1 cup", 148, 12, 12, 0, 8],
    ["flour", "1 cup", 455, 95, 0, 3, 13],
    ["sugar", "1 cup", 773, 200, 200, 0, 0],
    ["butter", "1 tbs", 94, 3, 0, 1, 4]  
  ]

  
  ingredient_list.each do |name, measure, kcal, carbs, sugars, fiber, protein|
    ingredient = Ingredient.new( name: name, measure: measure, kcal: kcal, carbs:carbs, sugars: sugars, fiber: fiber, protein: protein)
    ingredient.save
end