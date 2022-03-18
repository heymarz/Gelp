100.times do
  name = Faker::Name.unique.name
  User.create(username: name)
end

50.times do
  restaurant_name = Faker::Restaurant.unique.name
  restaurant_type = Faker::Restaurant.type
  restaurant_description = Faker::Restaurant.description
  Restaurant.create(name: restaurant_name, food_type: restaurant_type, description: restaurant_description)
end

200.times do
  review = Faker::Restaurant.review
  user_id = rand(1..100)
  restaurant_id = rand(1..50)
  rating = rand(1..5)
  Review.create(review_description: review, user_id: user_id, restaurant_id: restaurant_id, rating: rating)
end