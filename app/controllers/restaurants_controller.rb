class RestaurantsController < ApplicationController

  def index
    render json: Restaurant.all
  end
  
  def show
    restaurant = Restaurant.find_by(id: params[:id])
    render json: restaurant
  end

  private
  def restaurant_params
    params.permit(:name, :food_type, :description)
  end

end
