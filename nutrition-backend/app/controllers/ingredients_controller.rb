class IngredientsController < ApplicationController
    def index
        if params[:q] 
            @ingredients = Ingredient.where("name LIKE ?", params[:q])
        else
            @ingredients = Ingredient.all 
        end
        render json: @ingredients
    end

    def create
        @ingredient = Ingredient.new(ingredient_params)
        if @ingredient.save
            render json: @ingredient
        else
            render json: {error: 'Error creating ingredient'}
        end
    end

    def show
        #request to api/meals/id
        @ingredient=Ingredient.find(params[:id])
        render json: @ingredient
    end

    def destroy
        meals = MealIngredient.find_by(:ingredient_id => params[:id])
        if !meals 
            @ingredient=Ingredient.find(params[:id])
            if !@ingredient.destroy
                render json: {error: 'Error deleting ingredient'}
             end
        else
            render json: {error: 'Cannot delete ingredient which is part of a meal.'}
        end

    end

    private
    def ingredient_params
        params.require(:ingredient).permit(:name, :measure, :kcal)
    end

end
