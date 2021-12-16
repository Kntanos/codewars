class Odd

  def find(array)
    array.uniq.select do | int |
      array.count(int).odd?
    end[0]
  end
end
