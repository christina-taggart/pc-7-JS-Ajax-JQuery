get '/' do
  erb :index
end

post '/color' do
  content_type :json
  { cell: rand(9),
    color: "#" + "%06x" % (rand * 0xffffff)
  }.to_json
end