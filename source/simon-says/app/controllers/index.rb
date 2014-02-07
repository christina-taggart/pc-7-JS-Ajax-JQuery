get '/' do
  erb :index
end

post '/color' do
	content_type :json
  {cell: rand(1..9), color: "#" + "%06x" % (rand * 0xffffff)}.to_json
end