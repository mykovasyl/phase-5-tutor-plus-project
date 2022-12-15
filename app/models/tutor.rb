class Tutor < User
  has_and_belongs_to_many :students, join_table: :tutor_students
  # has_many :tutor_students, class_name: 'TutorStudent', foreign_key: :tutor_id
  # has_many :students, through: :tutor_students
  has_many :assignments, as: :imageable
  
  validates :subjects, presence: true
  validates :name, presence: true
  validates :grade, absence: true

end
