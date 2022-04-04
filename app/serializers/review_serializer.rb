class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :restaurant_id, :user_id, :review_description

  # has_one :user
end
