require './lib/dirReduc'

RSpec.describe '.dirReduc' do
  it 'returns the same array if no needless directions' do
    
    expect(dirReduc(['North'])).to eq(['North'])
  end

  it 'returns the same array if no needless directions' do
    
    expect(dirReduc(%w[North, West])).to eq(%w[North, West])
  end

  it 'reducts pair of needless directions' do
    
    expect(dirReduc(['North', 'South'])).to eq([])
  end

  it 'reducts pair of needless directions' do
    
    expect(dirReduc(['South', 'North'])).to eq([])
  end
end