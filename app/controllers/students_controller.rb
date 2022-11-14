class StudentsController < UsersController

  def index 
    students = Student.all 
    render json: students
  end

  def create
    super
    student = Student.create!(student_params)
    render json: student, status: :created
  end

  def update
    student_to_update = find_student
    student_to_update.update!(student_params)
    render json: student, status: :accepted
  end

  def destroy
    student_to_delete = find_student
    student_to_delete.destroy
    head :no_content
  end

private

def student_params
  params.permit(:name, :grade)
end

def find_student
  Student.find(params[:id])
end

end
