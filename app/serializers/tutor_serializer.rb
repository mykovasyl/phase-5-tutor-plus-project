class TutorSerializer < UserSerializer
  attributes :id, :subjects, :headline
  has_many :students, Serializer: StudentSerializer
  
end
