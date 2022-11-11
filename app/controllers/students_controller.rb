class StudentsController < UsersController

  def create
    super
    student = Student.create!(student_params)
    render json: student, status: :created
  end

  def update
    student_to_update = Student.find(params[:id])
    student_to_update.update!(student_params)
    render json: student, status: :accepted
  end

private

def student_params
  params.permit(:name, :grade)
end

end
