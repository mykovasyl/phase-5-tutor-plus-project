class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar 

  validates :username, presence: true, uniqueness: true, length: {minimum: 2}
  validates :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 2, maximum: 15}, :if => :password
  validates :password_confirmation, length: {minimum: 2, maximum: 15}, :if => :password_confirmation
  validates :type, presence: true

end
