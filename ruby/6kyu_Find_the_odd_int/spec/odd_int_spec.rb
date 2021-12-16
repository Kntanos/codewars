require './lib/odd_int'

RSpec.describe Odd do
  describe '#find' do
    it 'returns the int that appears odd number of times' do
      
      expect(subject.find([1])).to eq(1)
    end

    it 'returns the int that appears odd number of times' do
      
      expect(subject.find([1,1,2])).to eq(2)
    end

    it 'returns the int that appears odd number of times' do
      
      expect(subject.find([1,1,1,1,2,2,3])).to eq(3)
    end

    it 'returns the int that appears odd number of times' do
      
      expect(subject.find([1,1,1,1,2,4,2,3,3,3,3])).to eq(4)
    end
  end
end
