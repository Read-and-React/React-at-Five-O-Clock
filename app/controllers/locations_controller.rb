class LocationsController < ApplicationController

  def index
    @locations = Location.five_clock
    render json: @locations
  end

  def show
  end

end
