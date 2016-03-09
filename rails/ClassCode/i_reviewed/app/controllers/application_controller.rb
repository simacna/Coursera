class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  #before you do anything else, make sure you're logged in:
  before_action :ensure_login
  helper_method :logged_in?, :current_user

  # protected scope - other controllers are allowed to 
  # inherit vs private scope where they can't
  protected

    def ensure_login
      #always go to login page unless session contains
      #reviewer_id
      redirect_to login_path unless session[:reviewer_id]
    end

    def logged_in?
      session[:reviewer_id] #nil is false
    end

    def current_user
      @current_user ||= Reviewer.find(session[:reviewer_id])
    end
end
