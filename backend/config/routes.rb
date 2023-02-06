Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get "/articles/", to: "article#index"

  post "/articles/", to: "article#create"


  get "/category", to: "category#index"
  post "/category", to: "category#create"
end
