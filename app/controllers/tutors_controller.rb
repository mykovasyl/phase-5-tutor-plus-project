class TutorsController < UsersController

  def index
    tutors = Tutor.all 
    render json: tutors
  end
  
  def create
    super
    tutor = Tutor.create!(tutor_params)
    render json: tutor, status: :created
  end

  def update
    tutor_to_update = find_tutor
    tutor_to_update.update!(tutor_params)
    render json: tutor, status: :accepted
  end

  def destroy
    tutor_to_delete = find_tutor
    tutor_to_delete.destroy
    head :no_content
  end

private

def tutor_params
  params.permit(:name, :hourly_rate, :headline, :subjects)
end

def find_tutor
  Tutor.find(params[:id])
end

end
