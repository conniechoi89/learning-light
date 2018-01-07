# {id, coursename, title, description,
#  author, ratings, tags, …}


Rails.application.routes.draw do

  post 'user_token' => 'user_token#create'
  
  put 'users' => 'users#update'
  resources :users, only: [:index, :create, :show]

  resources :user_sections, only: [:create]

  resources :reviews, only: [:create]
  
  get 'courses', to: 'courses#index', as: :courses
  get ':coursename', to: 'courses#show', as: :coursename
  get ':coursename/:sectionname', to: 'sections#show', as: :sectionname

end
