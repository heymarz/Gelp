class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :restaurant_id
      t.text :review_description
      t.integer :rating

      t.timestamps
    end
  end
end
