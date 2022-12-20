class Assignment < ApplicationRecord
  belongs_to :student
  belongs_to :tutor
  
  # has_many_attached :files

  validates :name, :subject, presence: true
  # validates_presence_of :file, message: 'Must be attached'
end
