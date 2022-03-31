class ReviewsController < ApplicationController
  def index
    render json: Review.all
  end

  def show
    restaurant_review = Review.find_by(id: review_params[:id])
    render json: restaurant_review
  end

  def create
    restaurant_review = Restaurant.review.create(review_params)
    render json: restaurant_review, status: :created
  end

  private
  def review_params
    params.permit(:user_id, :restaurant_id, :review_description, :rating)
  end
end
