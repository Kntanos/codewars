require './duplicate_encoder'

describe '.duplicate_encode' do
  it 'returns the encoded sting' do
    
    expect(duplicate_encode('din')).to eq('(((')
  end
end