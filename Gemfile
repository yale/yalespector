source 'http://rubygems.org'

gem 'rails'

# HAML/SASS
gem 'haml'
gem 'compass', "~>0.11"
gem 'html5-boilerplate'

# Markdown
gem 'rdiscount' 

# Access control
gem 'cancan'

# OAuth, FB connect, etc
gem 'devise'
gem 'omniauth'

# Semantic forms
gem 'formtastic'

# Better than instance vars
gem 'decent_exposure'

# Versioning
gem 'paper_trail'

# Image attachment
gem 'paperclip'

# ActiveRecord search
gem "meta_where"
gem "meta_search"

group :cucumber do
    gem 'capybara'
    gem 'database_cleaner'
    gem 'cucumber-rails'
    gem 'cucumber'
    gem 'spork'
    gem 'launchy'
end

group :development, :test do
  gem 'webrat'
  gem 'sqlite3'
  gem 'nifty-generators'
  gem 'rspec'
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'launchy'
  gem 'guard-rspec'
  gem 'growl'
end

group :production do
  gem 'mysql'
  gem 'mysql2', :require => 'mysql'
end

gem "mocha", :group => :test
