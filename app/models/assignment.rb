class Assignment < ApplicationRecord
  belongs_to :tutor_students

  has_one_attached :avatar
end
