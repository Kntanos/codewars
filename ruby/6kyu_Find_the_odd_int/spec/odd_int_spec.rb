require './lib/odd_int'

RSpec.describe Odd do
  describe '#find' do
    it 'returns the int that appears odd number of times' do
      
      expect(subject.find([1])).to eq(1)
    end
  end
end
