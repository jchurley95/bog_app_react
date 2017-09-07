Rails.application.routes.draw do
  root to: "creatures#index"

  namespace :api do
    resources :creatures
  end
end
