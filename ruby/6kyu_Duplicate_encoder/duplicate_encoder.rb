def duplicate_encode(word)
  word.downcase.chars.map do |char|
    word.downcase.count(char) > 1 ? char = ')' : char = '('
  end.join('')
end