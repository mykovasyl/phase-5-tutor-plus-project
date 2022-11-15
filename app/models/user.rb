class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar 

  validates :username, presence: true, uniqueness: true, length: {minimum: 2}
end
