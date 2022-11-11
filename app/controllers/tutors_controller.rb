class TutorsController < UsersController
  
  def create
    super
    tutor = Tutor.create!(tutor_params)
    render json: tutor, status: :created
  end

  def update
    tutor_to_update = Tutor.find(params[:id])
    tutor_to_update.update!(tutor_params)
    render json: tutor, status: :accepted
  end

private

def tutor_params
  params.permit(:name, :hourly_rate, :headline, :subjects)
end

end
