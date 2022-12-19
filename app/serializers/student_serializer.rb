class StudentSerializer < UserSerializer
  attributes :id, :grade
  has_many :assignments

  # def tutor_assignments
  #   @current_user.
  # end
end
