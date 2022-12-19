class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :subject
  belongs_to :student
  belongs_to :tutor


end
