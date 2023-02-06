class ArticleController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        if params[:id] 
            render json: Article.find(params[:id]).to_json( include: [:categories, :user] );
        else 
            render json: Article.all().to_json( include: [:categories, :user] );
        end
    end 

    def create 
        author = User.find(params[:author_id])
        article = author.articles.create(title: params[:title], text: params[:text], image_url: params[:image_url], )
    
        params[:categories].each {
            |c|
            puts "category -"
            puts c  
            cat = Category.find_by(name: c)
            if !cat 
                article.categories << Category.create(name: c)
            else 
                article.categories << cat  
            end
        }
        render json: article.categories;
    end
end
