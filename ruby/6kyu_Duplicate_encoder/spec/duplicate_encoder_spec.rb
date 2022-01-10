require './duplicate_encoder'

describe '.duplicate_encode' do
  it 'returns the encoded sting' do
    
    expect(duplicate_encode('din')).to eq('(((')
    expect(duplicate_encode('recede')).to eq('()()()')
    expect(duplicate_encode('dinner')).to eq('(())((')
    expect(duplicate_encode('Success')).to eq(')())())')
    expect(duplicate_encode('(( @')).to eq('))((')
    expect(duplicate_encode('Supralapsarian')).to eq(')()))()))))()(')
  end
end