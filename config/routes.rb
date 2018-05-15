Rails.application.routes.draw do

  get "/location" => "locations#index"
  get "/phrases" => "phrases#index"

end
