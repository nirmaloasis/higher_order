const expect = require('chai').expect
const countWords = require('../src/count_words')

describe('#Count the number of occurence of words',() =>{
  it('Take a string and return an object whose properties are the words and whose values are the count of occurrences of that word in the provided sentence',() =>{
    const input = "abc bcd abc abc"
    expect(countWords(input)).to.deep.equal({abc : 3,bcd : 1})
  })
  it('For an empty return an empty object',() =>{
    const input = ""
    expect(countWords(input)).to.deep.equal({})
  })
})
