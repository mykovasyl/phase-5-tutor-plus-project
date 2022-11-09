class TutorStudent < ApplicationRecord
  has_many :assignments
  belongs_to :tutor 
  belongs_to :student 
end
