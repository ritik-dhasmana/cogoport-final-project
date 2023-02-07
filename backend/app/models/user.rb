class User < ApplicationRecord
  has_secure_password
  has_many :articles
  has_many :likes
  has_many :comments
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

end
