class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar 

  validates :username, presence: true, uniqueness: true, length: {minimum: 2}
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
  validates :password_confirmation, presence: true
  validates :role, presence: true

  enum role: [:student, :tutor]
  after_initialize :set_default_role, :if => :new_record?

  def set_default_role
    if(self.grade) 
      self.role = :student
    else 
      self.role = :tutor
    end
  end

end
