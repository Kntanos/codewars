OPPOSITE = {
  "North" => "South",
  "South" => "North",
  "East"  => "West",
  "West"  => "East"
}

def dirReduc(arr)
  stack = []
  arr.each do |dir|
    OPPOSITE[dir] == stack.last ? stack.pop : stack.push(dir)
  end
  stack
end