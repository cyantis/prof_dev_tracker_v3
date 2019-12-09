class LocationsController < ApplicationController
  def index
    locations = Location.all
    #@employee = Employee.find_by(id: session[:user_id])
    render json: locations
  end

end
