class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :subject, :tutor_id, :student_id
end
