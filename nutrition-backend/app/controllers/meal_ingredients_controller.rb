class MealIngredientsController < ApplicationController
    
    def index
        @meal=Meal.find(params[:meal_id])
        render json: @meal.ingredients
    end

    def create
        @meal = Meal.find(params[:meal_id])
        if (params[:id]) {
            @ingredient = Ingredient.find(params[:id])
        } else {
            @ingredient = Ingredient.new(:name => params[:name].downcase, :measure => params[:measure], :kcal => params[:kcal])
            @ingredient.save
        }        
        meal_ingr = MealIngredient.new(:meal_id => params[:meal_id], :ingredient_id => @ingredient.id, :ingredient_amount => params[:servings].to_f)
        
        if meal_ingr.save
           if  @meal.add_ingredient(@ingredient, params[:servings].to_f)
                render json: @meal
           else
              render json: {error: "Error saving meal ingredient"}
           end
        else
           render json: {error: "Error saving ingredient"}
        end

    end

    def show
        #request to api/meals/id
        @meal=Meal.find(params[:id])
        render json: @meal
    end

    def destroy
        
        @ingredient = Ingredient.find(params[:id])
        meal_ingr = MealIngredient.find_by(:meal_id => params[:meal_id], :ingredient_id => params[:id])
        if (meal_ingr) 
            servings = meal_ingr.ingredient_amount
            meal_ingr.destroy
            @meal = Meal.find(params[:meal_id])
            @meal.delete_ingredient(@ingredient, servings)
            @meal.save
            render json: @meal
        else
            render json: {error: "Error deleting meal ingredient"}
        end
        
    end

    private
    def ingredient_params
        params.require(:meal_ingredient).permit(:servings)
    end

end