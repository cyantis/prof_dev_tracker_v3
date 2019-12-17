class CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments
  end

  def create
    comment = Comment.create(comment_params)
    render json: comment
    #if @comment.save
    #  redirect_to event_path(@event)
    #else
    #  render :new
    #end
  end

  #def show
  #  @comment = Comment.find(params[:id])
  #  render json: @comment
  #end

  #def edit
  #  @comment = Comment.find(params[:id])
  #  @event = Event.find(params[:event_id])
  #  @employee = Employee.find_by_id(session[:user_id])
  #end

  def update
    comment = Comment.find(params[:id])
    event = Event.find(params[:event_id])
    comment.update(comment_params)
    render json: comment
  end

  def destroy
    comment = Comment.find(params[:id])
    event = Event.find(params[:event_id])
    comment.destroy
    head :no_content, status: :ok
  end


  private

  def comment_params
    params.require(:comment).permit(:content, :event_id, :employee_id)
  end

end
