class Student < User
  has_and_belongs_to_many :tutors, join_table: :assignments

  validates :name, presence: true
  validates :grade, presence: true

  validates :subjects, absence: true
end
