Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users,  only: [:new, :create, :show, :edit, :index, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resource :quest, only: [:new, :create, :show, :edit, :destroy]
    resources :members, only: [:index, :create, :show]
    resources :lists, only: [:update, :destroy, :show]
    resources :items, only: [:create, :update, :destroy]
  end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
