class ReviewsController < ApplicationController
  def index
    render json: Review.all
  end

  def show
    restaurant_review = find_review
    render json: restaurant_review
  end

  def create
    restaurant_review = Review.create(review_params)
    render json: restaurant_review, status: :created
  end

  def update
    review = find_review
    review.update(review_params)
    render json: review
  end

  def destroy
    review = find_review
    review.destroy
    head :no_content
  end

  private
  def find_review
    Review.find_by(id: params[:id])
  end

  def review_params
    params.permit(:user_id, :restaurant_id, :review_description, :rating)
  end
end
