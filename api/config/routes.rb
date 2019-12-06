Rails.application.routes.draw do
  resources :events do
    resources :comments
  end

  resources :comments, only: [:index]

  resources :employees do
    resources :events
  end

  resources :locations

  resource :sessions, only: [:new, :create, :destroy]

  root 'locations#index'
end
