class Article < ApplicationRecord
    has_and_belongs_to_many  :categories,optional: true
    belongs_to :user
    has_many :likes
    has_many :comments
end
