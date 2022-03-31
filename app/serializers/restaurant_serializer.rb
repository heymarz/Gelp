class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :food_type, :description
  
end
