class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :dashboard ]

  def home
  end

  def dashboard
    @lair = Lair.new
    @lair.user = current_user
    @favourites = Favourite.where(current_user)
  end
end
