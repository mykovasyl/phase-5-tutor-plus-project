class Assignment < ApplicationRecord
  belongs_to :tutor_student

  has_many_attached :files

  validates :name, :subject, presence: true
  validates_presence_of :file, message: 'Must be attached'
end
