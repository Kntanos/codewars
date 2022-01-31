require './lib/dirReduc'

RSpec.describe '.dirReduc' do
  it 'returns the same array if no needless directions' do
    
    expect(dirReduc(['North', 'West'])).to eq(['North', 'West'])
  end

  it 'reducts pair of needless directions' do
    
    expect(dirReduc(['North', 'South', 'West'])).to eq(['West'])
  end

  it 'reducts pair of needless directions' do
    
    expect(dirReduc(['North', 'South', 'West'])).to eq(['West'])
  end

  it 'reducts pair of needless directions' do
    
    expect(dirReduc(['West', 'South', 'North'])).to eq(['West'])
  end
end