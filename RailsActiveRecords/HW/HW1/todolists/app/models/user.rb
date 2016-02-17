class User < ActiveRecord::Base

  # def create_user(params)
  #   user = User.create(params[username: params["username"], password_digest: params["password_digest"]])
  # end

    def create_user(params)
      # accept a hash of user properties (`:username` and `:password_digest`) as an input parameter. Note these are 100% same as model class.
      # use the User Model class to create a new user in the DB
      # return an instance of the class with primary key (`id`), and dates (`created_at` and `updated_at`) assigned
      # @user = User.create(params[username: params["username"], password_digest: params["password_digest"]])
      # return @user()
       @u = User.create(username: params[:username],password_digest: params[:password_digest])
  end

end
