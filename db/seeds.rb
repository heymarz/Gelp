puts "🌱 Seeding spices..."

mike = User.create(username: "Mike", password: "bananas")
roger = User.create(username: "Roger", password: "bikes")
sarah = User.create(username: "Sarah", password: "williamsburg")
cassandra = User.create(username: "Cassandra", password: "newyorkcity")


smokestack = Restaurant.create(name: "Smokestack Shakes", food_type: "European", description: "Our mission is to be a leader in the distribution and merchandising of food, pharmacy, health and personal care items, seasonal merchandise, and related products and services. We place considerable importance on forging strong supplier partnerships. Our suppliers, large or small, local or global, are essential components in accomplishing our mission.")
hal_pub = Restaurant.create(name: "HAL Pub", food_type: "European", description:"To sell delicious and remarkable food and drinks. That the food and drink we sell meets the highest standards of quality, freshness and seasonality and combines both modern-creative and traditional southern styles of cooking.")
dbj_grill = Restaurant.create(name: "KBJ Grill", food_type: "Brazilian", description: "To achieve the above whilst upholding staff policies and practices which promote a fair and positive working environment. To be aware of and act on our responsibilities as a good corporate citizen to  provide a safe, clean and attractive place for guests to enjoy and for employees to work in - ensure ecologically sound management practices at the restaurant and in our surrounding gardens and woods - undertake meaningful involvement of Restaurant Les Fougères in selected charitable activities in our community and region.")
silver_juice_bar = Restaurant.create(name: "Silver Juice Bar", food_type: "Argentinian", description: "Our Mission at Denny’s is to establish beneficial business relationships with diverse suppliers who share our commitment to customer service, quality and competitive pricing.")
fvy_house = Restaurant.create(name:"FVY House", food_type: "French", description: "To provide an exceptional dining experience that satisfies our guests’ grown-up tastes by being a Cut-Above in everything we do.")

smokestack.reviews.create(review_description: "Big fan of the briskets. I've come here a couple of times and they always come out perfect!", user_id: mike.id, rating: rand(1..5))
hal_pub.reviews.create(review_description: "Fantastic service. Ask for Vinny. Gives the best pours and hal's pub makes a fantastic burger and crinkle cut fries. The sauce that comes with it is just heaven.", user_id: cassandra.id, rating: rand(1..5))
dbj_grill.reviews.create(review_description: "The meat selection is always fresh and grilled to perfection. Service is friendly and on point.", user_id: roger.id, rating: rand(1..5))
silver_juice_bar.reviews.create(review_description: "I recommend the Mango Madness smoothie. It is sweet and yet so refreshing. Service is friendly and quick. I usually come here to study with my friends or meet up here for the nice ambience.", user_id: sarah.id, rating: rand(1..5))
fvy_house.reviews.create(review_description: "Modern space with okay service. I had the pontine fries and a snapper fish as my entree.", user_id: cassandra.id, rating: rand(1..5))

puts "✅ Done seeding!"