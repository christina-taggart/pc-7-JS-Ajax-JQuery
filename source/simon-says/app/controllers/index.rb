require 'json'
get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  content_type :json

  #Create and return a JSON object with the random cell and color given below.

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  json_hash = {color: color, cell: cell}.to_json
end