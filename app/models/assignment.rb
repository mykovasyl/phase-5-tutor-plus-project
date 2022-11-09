class Assignment < ApplicationRecord
  has_many :tutor_students
  has_many :tutors, through: :tutor_students
  has_many :students, through: :tutor_students
end
