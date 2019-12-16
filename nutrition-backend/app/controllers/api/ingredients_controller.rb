class Api::IngredientsController < ApplicationController
    def index
        @ingredients = Ingredient.all
        render json: @ingredients
    end

    def create
        @ingredient = Ingredient.new(ingredient_params)
        if @ingredient.save
            render json: @ingredient
        else
            render json: (error: 'Error creating ingredient')
        end
    end

    def show
        #request to api/meals/id
        @ingredient=Ingredient.find(params[:id])
        render json: @ingredient
    end

    def destroy
        @ingredient=Ingredient.find(params[:id])
        @ingredient.destroy
    end

    private
    def ingredient_params
        params.require(ingredient).params(:name)
    end

end
