class MealIngredientsController < ApplicationController
    
    def index
        binding.pry
        @meal=Meal.find(params[:meal_id])
        render json: @meal.ingredients
    end

    def create
        @meal = Meal.find(params[:meal_id])
        @ingredient = Ingredient.new(:name => params[:name], :measure => params[:measure], :kcal => params[:kcal])
        if @ingredient.save
           @meal.add_ingredient(@ingredient, params[:servings].to_i)
           if @meal.save
                render json: @meal
           else
              render json: {error: "Error saving meal ingredient"}
           end
           render json: {error: "Error saving ingredient"}
        else

    end

    def show
        #request to api/meals/id
        @meal=Meal.find(params[:id])
        render json: @meal
    end

    def destroy
        @meal=Meal.find(params[:id])
        @meal.destroy
    end

    private
    def ingredient_params
        params.require(:meal_ingredient).permit(:servings)
    end

end