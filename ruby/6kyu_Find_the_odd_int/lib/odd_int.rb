class Odd

  def find(array)
    array.uniq.select { | int | array.count(int).odd? }[0]
  end
end
