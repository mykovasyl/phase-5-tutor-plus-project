class Assignment < ApplicationRecord
  belongs_to :imageable, polymorphic: true

  has_many_attached :files

  validates :name, :subject, presence: true
  validates_presence_of :file, message: 'Must be attached'
end
