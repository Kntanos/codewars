require 'vowel_count'

RSpec.describe VowelCount do
  describe '#count' do
    it 'returns 5 for string "aeiou"' do
      
      expect(subject.count("aeiou")).to eq(5)
    end

    it 'returns 10 for string "aeiouaeiou"' do
      
      expect(subject.count("aeiouaeiou")).to eq(10)
    end

    it 'returns 5 for string "dafehikonur"' do
      
      expect(subject.count("dafehikonur")).to eq(5)
    end

    it 'returns 0 for string ""' do
      
      expect(subject.count("")).to eq(0)
    end
  end
end