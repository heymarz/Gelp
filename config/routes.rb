Rails.application.routes.draw do
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :restaurants, only: [:index, :show, :create]
  
  resources :reviews, only: [:index, :show]
  post 'restaurants/:restaurant_id/reviews/new', to: 'reviews#create'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
