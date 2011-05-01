class YaleController < ApplicationController
  
  respond_to :html
  caches_page :intro
  
  def intro
    
  end
  
  def refresh
    expire_page :action => :intro
    redirect_to :action => :intro
  end
  
end
