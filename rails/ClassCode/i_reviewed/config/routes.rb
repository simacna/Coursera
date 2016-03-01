Rails.application.routes.draw do
  resources :books do
    #notes is a nested resource
    #below will only allow 2/7 resources
    resources :notes, only: [:create, :destroy]
  end
  root to: 'books#index'
end
