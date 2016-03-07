Rails.application.routes.draw do
  # below three were created when sessions controller was created

  # get 'sessions/new'

  # get 'sessions/create'

  # get 'sessions/destroy'
  root to: 'books#index'

  resources :books do
    #notes is a nested resource
    #below will only allow 2/7 resources
    resources :notes, only: [:create, :destroy]
  end
  resources :sessions, only: [:new, :create, :destroy]
  get "/login" => "sessions#new", as: "login"
  delete "/logout" => "sessions#destroy", as: "logout"
end
