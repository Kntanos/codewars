require 'vowel_count'

RSpec.describe VowelCount do
  describe '#count' do
    it 'returns 5 for string "aeiou"' do
      
      expect(subject.count("aeiou")).to eq(5)
    end
  end
end