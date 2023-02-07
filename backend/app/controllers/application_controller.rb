class ApplicationController < ActionController::Base
    include JsonWebToken 
    before_action :authenticate_request 

    private 
        def authenticate_request 
            begin
                header = request.headers["Authorization"]
                if !header
                    render json: {error: "bearer token not passed"}, status: :unauthorized
                    return
                end
                header = header.split(" ").last if header 
    
                decode = jwt_decode(header)   
                @user = User.find(decode[:user_id]) 
            rescue 
                render json: {error: "token invalid"}, status: :unauthorized
            end
        end 
end
