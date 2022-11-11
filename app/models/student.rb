class Student < ApplicationRecord
  has_many :tutor_students
  has_many :tutors, through: :tutor_students
end
