class TutorStudent < ApplicationRecord
  belongs_to :tutor, class_name: 'Tutor'
  belongs_to :student, class_name: 'Student'
end
