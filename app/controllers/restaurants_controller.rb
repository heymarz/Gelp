class RestaurantsController < ApplicationController

  def index
    render json: Restaurant.all
  end

  def create
    restaurant = Restaurant.create!(restaurant_params)
    render json: restaurant
  end

  private
  def restaurant_params
    params.permit(:name, :food_type, :description)
  end

end
