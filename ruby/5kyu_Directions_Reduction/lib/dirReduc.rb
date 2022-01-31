def dirReduc(directions)
  needlessDir = {'North' => 'South', 'South' => 'North', 'West' => 'East'}

  if directions[0] == needlessDir[directions[1]]
    []
  else
    directions
  end
end