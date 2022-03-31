class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_description, :rating, :restaurant_id, :user_id

  # has_one :user
end
