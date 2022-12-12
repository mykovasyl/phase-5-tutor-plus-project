class Student < User
  has_many :tutor_students
  has_many :tutors, through: :tutor_students
  has_many :assignments, as: :imageable

  validates :name, presence: true
  validates :grade, presence: true

  validates :subjects, absence: true
end
