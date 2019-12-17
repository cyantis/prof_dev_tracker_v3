class EventsController < ApplicationController

  def index
    events = Event.all
    render json: events
  end

  def create
    event = Event.create(event_params)
    if event.save
      render json: event, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def show
    event = Event.find(params[:id])
    render json: event
  end

  def update
    event = Event.find(params[:id])
    event.update(event_params)
    render json: event
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    head :no_content, status: :ok
  end

  private

  def event_params
    params.require(:event).permit(:name, :date, :category, :description, :shared, employee_ids: [])
  end

end
