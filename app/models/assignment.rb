class Assignment < ApplicationRecord
  belongs_to :imageable, polymorphic: true

  has_one_attached :avatar
end
