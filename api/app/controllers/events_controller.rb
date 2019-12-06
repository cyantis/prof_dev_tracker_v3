class EventsController < ApplicationController

  def index
    @events = Event.all
    render json: @events
  end

  def new
    @event = Event.new
    @employee = Employee.find(params[:employee_id])
  end

  def create
    @event = Event.create(event_params)
    @employee = Employee.find(params[:event][:employee_ids][0])
    if @event.save
      flash[:message] = "Learning Logged!"
      render json: @event, status: 201
    else
      render :new
    end
  end

  def show
    @event = Event.find(params[:id])
    @employee = Employee.find(session[:user_id])
    render json: @event
  end

  def edit
    @event = Event.find(params[:id])
    @employee = Employee.find(params[:employee_id])
  end

  def update
    @event = Event.find(params[:id])
    @event.update(event_params)
    @employee = Employee.find(params[:event][:employee_ids][0])
    flash[:message] = "Learning Updated!"
    redirect_to employee_event_path(@employee, @event)
  end

  def destroy
    @event = Event.find(params[:id])
    @employee = Employee.find(params[:employee_id])
    @event.destroy
    flash[:message] = "Learning Deleted!"
    redirect_to employee_path(@employee)
  end

  private

  def event_params
    params.require(:event).permit(:name, :date, :category, :description, :shared, employee_ids: [])
  end

end
