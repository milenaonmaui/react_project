class MealsController < ApplicationController
    def index
        @meals = Meal.all
        render json: @meals
    end

    def create
        binding.pry
        @meal = Meal.new(meal_params)
        if @meal.save
            render json: @meal
        end
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
    def meal_params
        params.require(:meal).permit(:name, :description)
    end

end
