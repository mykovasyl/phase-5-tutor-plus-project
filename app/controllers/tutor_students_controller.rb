class TutorStudentsController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    new_tutor_student = TutorStudent.create!(tutor_student_params)
    render json: new_tutor_student, status: :created
  end

  private

  def tutor_student_params
    params.permit(:tutor_id, :student_id)
  end

end
