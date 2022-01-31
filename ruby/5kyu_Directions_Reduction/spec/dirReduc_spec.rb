require './lib/dirReduc'

RSpec.describe '.dirReduc' do
  it 'returns the same array if no needless directions' do
    
    expect(dirReduc(['North'])).to eq(['North'])
  end

  it 'returns the same array if no needless directions' do
    
    expect(dirReduc(%w[North, West])).to eq(%w[North, West])
  end
end