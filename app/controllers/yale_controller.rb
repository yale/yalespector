class YaleController < ApplicationController
  
  respond_to :html
  caches_page :intro
  
  def intro
  end
  
end
