class UserController < ApplicationController 
    skip_before_action :verify_authenticity_token

    skip_before_action :authenticate_request, only: [:create, :index, :login]
    # before_action :set_user, only: [:user_profile, :delete, :update]

    # GET /users
    def index
        @users = User.all 
        render json: @users, status: :ok
    end
    
    # GET /users/{id}
    def user_profile  
        puts "user profile"
        puts @user
        render json: @user, status: :ok
    end

    # POST /users
    def create
        @user = User.new(user_params)
        if @user.save 
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages },status: :unprocessable_entity 
        end
    end

    # PUT /users/{id}
    def update
        unless @user.update(user_params)
            render json: { errors: @user.errors.full_messages },status: :unprocessable_entity 
            return
        end
        render json: @user , status: :created
    end

    # DELETE /users/ {id}
    def delete 
        @user.destroy
    end
    
    # POST /users/login  {email, password}
    def login 
        @user = User.find_by_email(params[:email])
        if @user&.authenticate(params[:password])
            token = jwt_encode(user_id: @user.id)
            render json: {token: token, user: @user}, status: :ok 
        else 
            render json: {error: 'unauthorized'}, status: :unauthorized 
        end 
    end

    # GET /users/articles
    def get_user_articles
        render json: @user.articles
    end

    private
    
    def user_params 
        params.permit(:name ,:email, :password,:description, :pfp_url)
    end

    # def set_user
    #     begin
    #         header = request.headers["Authorization"]
    #         if !header
    #             render json: {error: "bearer token not passed"}, status: :unauthorized
    #             return
    #         end
    #         header = header.split(" ").last if header 

    #         decode = jwt_decode(header)   
    #         @user = User.find(decode[:user_id]) 
    #     rescue 
    #         render json: {error: "token invalid"}, status: :unauthorized
    #     end
    # end
    

end