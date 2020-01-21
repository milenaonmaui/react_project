class MealsController < ApplicationController
    

    def index
        @meals = Meal.all.order('name ASC')
        render json: @meals
    end

    def create
        @meal = Meal.new(meal_params)
        if @meal.save
            render json: @meal
        end
    end

    def show
        @meal=Meal.find(params[:id])
        if @meal
           render json: @meal
        else
            render json: {"error": "Meal not found"}
        end
    end

    def destroy
        @meal=Meal.find(params[:id])
        if @meal
            @meal.destroy
            render json: @meal.id
         else
             render json: {"error": "Error deleting: Meal not found"}
         end
        
    end

    private
    def meal_params
        params.require(:meal).permit(:name, :description)
    end

end
