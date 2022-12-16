class TutorStudentsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    new_tutor_student = TutorStudent.create!(tutor_student_params)
    updated_student = Student.find(params[:tutor_id])
    render json: updated_student, status: :created
  end

  private

  def tutor_student_params
    params.permit(:tutor_id, :student_id)
  end

end
