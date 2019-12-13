class SessionsController < ApplicationController

  def create
    employee = Employee.find_by(username: params[:username].to_s.downcase)

    if employee && employee.authenticate(params[:password])
      auth_token = JsonWebToken.encode({user_id: employee.id})
      render json: {
        auth_token: auth_token,
        user_id: employee.id,
        }, status: :ok
    else
      render json: {error: 'Invalid username / password'}, status: :unauthorized
    end
  end

end
