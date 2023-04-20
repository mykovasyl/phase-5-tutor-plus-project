class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :subject, :tutor_id, :student_id
  # , :file_urls
  belongs_to :student
  belongs_to :tutor
end
