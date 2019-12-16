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

  #def edit
  #  @event = Event.find(params[:id])
  #  @employee = Employee.find(params[:employee_id])
  #end

  def update
    event = Event.find(params[:id])
    employee = Employee.find(params[:event][:employee_ids][0])
    event.update(event_params)
    render json: event
    #flash[:message] = "Learning Updated!"
    #redirect_to employee_event_path(@employee, @event)
  end

  def destroy
    event = Event.find(params[:id])
    employee = Employee.find(params[:employee_id])
    event.destroy
    head :no_content, status: :ok
    #flash[:message] = "Learning Deleted!"
    #redirect_to employee_path(@employee)
  end

  private

  def event_params
    params.require(:event).permit(:name, :date, :category, :description, :shared, employee_ids: [])
  end

end
