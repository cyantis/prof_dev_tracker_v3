Rails.application.routes.draw do
  scope 'api/v1/' do
    resources :events do
      resources :comments
    end

    resources :comments, only: [:index]

    resources :employees do
      resources :events
    end

    resources :locations

    resource :sessions, only: [:new, :create, :destroy]
  end

  #root 'locations#index'
end
