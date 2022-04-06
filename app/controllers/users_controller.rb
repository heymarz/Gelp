class UsersController < ApplicationController
  before_action :authorized, only: [:show]
  
  def index
    render json: User.all
  end

  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    if user.valid?
      render json: user, status: :created
    else
      render json: { error: user.errors.full_messages.join(", ") }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
