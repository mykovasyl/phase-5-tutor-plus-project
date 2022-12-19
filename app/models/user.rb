class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar 

  validates :username, presence: true, uniqueness: true, length: {minimum: 2}
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
  validates :password_confirmation, presence: true
  validates :type, presence: true

end
