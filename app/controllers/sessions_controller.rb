class SessionsController < ApplicationController
  #cookies.signed[:key_name]

  def create
    employee = Employee.find_by(username: params[:employee][:username])
    if employee && employee.authenticate(params[:employee][:password])
      created_jwt = issue_token({id: user.id})
      cookies.signed[:jwt] = {value:  created_jwt, httponly: true, expires: 1.hour.from_now}
      render json: {username: user.username}
    else
      render json: {
        error: 'Username or password incorrect'
        }, status: 404
    end
  end

  #def create
  #  @employee = Employee.find_by(username: params[:employee][:username])
  #    if @employee && @employee.authenticate(params[:employee][:password])
  #      session[:user_id] = @employee.id
  #      flash[:message] = "Welcome, #{@employee.name.split(" ")[0]}!"
  #      redirect_to root_path
  #    else
  #      flash[:message] = "Username or password is incorrect. Please, try again."
  #      render :new
  #    end
  #  end
#
  #def destroy
  #  session.delete :user_id
  #  flash[:message] = "Logout successful!"
  #  redirect_to root_path
  #end

end
