class SessionsController < ApplicationController

  def create
    employee = Employee.find_by(username: params[:username].to_s.downcase)

    if employee && employee.authenticate(params[:password])
      auth_token = JsonWebToken.encode({user_id: employee.id})
      manager = employee.manager_id.nil? || employee.manager_id == 0
      render json: {
        auth_token: auth_token,
        user_id: employee.id,
        name: employee.name,
        manager: manager,
        }, status: :ok
    else
      render json: {error: 'Invalid username / password'}, status: :unauthorized
    end
  end

end
