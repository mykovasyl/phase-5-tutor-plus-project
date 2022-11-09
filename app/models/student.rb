class Student < ApplicationRecord
  has_many :tutors, through: :tutor_students
  has_many :assignments, through: :tutor_students
end
