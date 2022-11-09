class TutorSerializer < ActiveModel::Serializer
  attributes :id, :name, :subjects, :headline, :hourly_rate
end
