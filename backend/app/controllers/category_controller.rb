class CategoryController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: Category.all()
    end

    def create 
        if params[:name]
            render json: Category.create(name: params[:name]);
        else 
            err = {
                status: "404",
                desc: "please provide valid category name"
            }
            render json: err
        end
    end

end
