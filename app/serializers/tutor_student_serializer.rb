class TutorStudentSerializer < ActiveModel::Serializer
  attributes :id, :tutor_id, :student_id
end
