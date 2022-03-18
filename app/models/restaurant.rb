class Restaurant < ApplicationRecord
  has_many :users, through: :reviews
  
end
