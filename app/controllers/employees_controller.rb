class EmployeesController < ApplicationController

  def index
    employees = Employee.all
    render json: employees
  end

  def create
    employee = Employee.create(employee_params)

    if employee.save
      auth_token = JsonWebToken.encode({user_id: employee.id})
      render json: {
        auth_token: auth_token,
        user_id: employee.id,
        manager: employee.manager?,
        name: employee.name,
        }, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def show
    employee = Employee.find(params[:id])
    render json: employee
  end

  def update
    employee = Employee.find(params[:id])
    employee.update(employee_params)
    render json: employee
  end

  private

  def employee_params
    params.require(:employee).permit(:username, :password, :email, :name, :title, :bio, :location_id, :manager_id, event_ids: [])
  end

end
