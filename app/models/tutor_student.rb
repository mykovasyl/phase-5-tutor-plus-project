class TutorStudent < ApplicationRecord
  belongs_to :tutor
  belongs_to :student
  has_many :assignments
end
