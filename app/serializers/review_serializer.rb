class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_description, :rating

  has_one :user
end
