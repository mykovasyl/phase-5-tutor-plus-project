class Tutor < ApplicationRecord
  has_secure_password

  has_many :tutor_students
  has_many :students, through: :tutor_students
  has_many :assignments, through: :tutor_students

  validates :name, presence: true 
  validates :hourly_rate, presence: true
end
