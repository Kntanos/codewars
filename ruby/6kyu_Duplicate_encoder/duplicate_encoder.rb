def duplicate_encode(word)
  word = word.downcase
  word.chars.map do |char|
    if word.count(char) > 1
      char = ')'
    else char = '('
    end
  end.join('')
end