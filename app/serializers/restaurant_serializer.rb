class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :food_type, :description
  has_many :reviews
end
