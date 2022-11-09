class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :completed
end
