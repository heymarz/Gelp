Rails.application.routes.draw do
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :restaurants, only: [:index, :show]
  
  resources :reviews
  post '/restaurants/:restaurant_id/reviews', to: 'reviews#create'
  delete 'reviews/:review_id', to: 'reviews#destroy'
  patch '/restaurants/:restaurant_id/reviews/:review_id', to: 'reviews#update'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
