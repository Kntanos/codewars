require './duplicate_encoder'

describe '.duplicate_encode' do
  it 'returns the encoded sting' do
    
    expect(duplicate_encode('din')).to eq('(((')
    expect(duplicate_encode('recede')).to eq('()()()')
    expect(duplicate_encode('dinner')).to eq('(())((')
  end
end