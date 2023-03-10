Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get "/articles/", to: "article#index"
  get "/articles/mostliked", to: "article#most_liked"
  get "/articles/mostcommented", to: "article#most_commented"


  post "/articles/", to: "article#create"
  delete "/articles/", to: "article#delete"
  put "/articles/", to: "article#update"
  post "/articles/like", to: "article#like"
  post "/articles/comment", to: "article#comment"

  get "/category", to: "category#index"

  post "/category", to: "category#create"


  get '/users/', to: "user#index"
  get '/users/profile', to: "user#user_profile"
  get '/users/articles', to: "user#get_user_articles"
  get '/users/mostpopular', to: "user#get_most_popular"

  post '/users', to: "user#create"
  post '/users/login', to: 'user#login'

  put '/users', to: 'user#update'
  delete '/users', to: 'user#delete'

  post '/users/password/forgot', to: 'password#forgot'
  post '/users/password/reset', to: 'password#reset'
end
