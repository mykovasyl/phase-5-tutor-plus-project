class Assignment < ApplicationRecord
  belongs_to :imageable, polymorphic: true

  has_one_attached :file

  validates :name, :subject, presence: true
  validates_presence_of :file, message: 'Must be attached'
end
