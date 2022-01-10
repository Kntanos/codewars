def duplicate_encode(word)
  word.chars.map do |char|
    if char == 'e'
      char = ')'
    else char = '('
    end
  end.join('')
end
