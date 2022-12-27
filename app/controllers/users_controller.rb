class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    all_users
  end

  # better to add tutor controller? will that carry association? how?
  def tutors_students 
    students = Student.all
    # filter students for only those not currently associated with tutor
    unassociated_students = students.select{|user| !user.tutors.include?(@current_user)} 
    render json: unassociated_students, include: 'assignments.tutor', status: :ok
  end

  # def students_tutors
  #   tutors = all_users.select{|user| user.type == "Tutor"}
  #   # filter tutors for only those not currently associated with student
  #   render json: tutors, status: :ok
  # end

  def create
    user = User.create!(new_user_params)
    session[:user_id] = user.id
    render json: user, status: :accepted
  end

  def show
    render json: @current_user, include: 'students.assignments'
  end

  def update
    user_to_update = find_user
    # user_to_update.avatar.attach(params[:avatar])
    user_to_update.update!(update_user_params)
    render json: user_to_update, status: :accepted
  end

  def destroy
    user_to_delete = find_user
    user_to_delete.destroy
    head :no_content
  end

  private

  def all_users
    User.all
  end

  def new_user_params
    params.permit(:username, :password, :password_confirmation, :avatar, :headline, :subjects, :name, :grade, :email, :type)
  end

  def update_user_params
    params.permit(:avatar, :headline, :subjects, :name, :grade, :email)
  end

  def find_user
    User.find(params[:id])
  end

end
