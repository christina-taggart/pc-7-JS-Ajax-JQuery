require 'json'

get '/' do
  erb :index
end

post '/color' do
  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  
  JSON.generate({cell: cell, color: color})
end