Rails.application.routes.draw do
  get '/user', to: 'users#show'
  
  resources :reviews, only: [:index]
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
