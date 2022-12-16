class Student < User
  has_and_belongs_to_many :tutors, join_table: :tutor_students
  # has_many :tutor_students, class_name: 'TutorStudent', foreign_key: :student_id
  # has_many :tutors, through: :tutor_students

  validates :name, presence: true
  validates :grade, presence: true

  validates :subjects, absence: true
end
