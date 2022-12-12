class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :accepted
  end

  def show
    render json: @current_user
  end

  # def update
  #   user_to_update = find_user
  #   user_to_update.avatar.attach(params[:avatar])
  #   user_to_update.update!(user_params)
  #   render json: user, status: :accepted
  # end

  # def destroy
  #   user_to_delete = find_user
  #   user_to_delete.destroy
  #   head :no_content
  # end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :avatar, :headline, :subjects, :name, :grade, :email, :type)
  end

  def find_user
    User.find(params[:id])
  end

end
