class UserMailer < ApplicationMailer
  default from: "amartya.c26@gmail.com"

  def welcome_email 
    @user = params[:user]
    mail(to:@user.email, subject: "Sign up Successful!")
  end
  def reset_password_email 
    @user = params[:user]
    @token = params[:token]
    mail(to: @user.email, subject: "Token to reset password")
end
end
