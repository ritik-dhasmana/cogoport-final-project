class ArticleController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :authenticate_request, only: [:create, :update, :delete]
    def index 
        if params[:id] 
            render json: Article.find(params[:id]).to_json( include: [:categories, :user] );
        else 
            render json: Article.all().to_json( include: [:categories, :user] );
        end
    end 

    def create 
        author = User.find(@user.id)
        article = author.articles.create(title: params[:title], text: params[:text], image_url: params[:image_url], )
        
        if params[:categories]
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
    end
        render json: article.to_json(include: [:categories,:user]);
    end

    def update
        begin
            article = @user.articles.find(params[:article_id])
            if(params[:title])
                article.title = params[:title]
            end
            if(params[:text])
                article.text = params[:text]
            end
            if(params[:image_url])
                article.title = params[:image_url]
            end
            if(params[:categories])
                article.categories = [];
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
            end
            article.save()
            render json: article
        rescue => exception
            render json: {error: exception}, status: :unauthorized
            
        end
    end

    # DELETE /users/ {id}
    def delete 
        begin   
             render  json: @user.articles.destroy_by(id: params[:article_id])
        rescue =>exception 
            render json: {error: exception}, status: :unauthorized
        end
    end
end
