class Student < User
  has_many :tutor_students
  has_many :tutors, through: :tutor_students
  has_many :assignments, as: :imageable

  validates :grade, presence: true

  validates :hourly_rate, absence: true
  validates :subjects, absence: true
end
