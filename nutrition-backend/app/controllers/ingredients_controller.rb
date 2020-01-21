class IngredientsController < ApplicationController
    def index
        if params[:q] 
            @ingredients = Ingredient.where("name LIKE ?", params[:q].downcase)
        else
            @ingredients = Ingredient.all.order('name ASC') 
        end
        render json: @ingredients
    end

    def create
        @ingredient = Ingredient.new(:name => params[:name].downcase, :measure => params[:measure], :kcal => params[:kcal], :fats => params[:fats], :protein => params[:protein], :fiber => params[:fiber], :carbs => params[:carbs])
        if @ingredient.save
            render json: @ingredient
        else
            render json: {error: 'Error creating ingredient'}
        end
    end

    def show
        @ingredient=Ingredient.find(params[:id])
        render json: @ingredient
    end

    def destroy
        meals = MealIngredient.find_by(:ingredient_id => params[:id])
        if !meals 
            @ingredient=Ingredient.find(params[:id])
            if !@ingredient.destroy
                render json: {error: 'Error deleting ingredient'}
            else
                render json: @ingredient.id
            end
        else
            render json: {error: 'Cannot delete ingredient which is part of a meal.'}
        end

    end

    private
    def ingredient_params
        params.require(:ingredient).permit(:name, :measure, :kcal, :fats, :carbs, :sugars, :fiber, :protein)
    end

end
